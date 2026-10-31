---
layout: ../../layouts/BlogPost.astro
title: "Why a version number can't tell you whether you're vulnerable"
description: "Backports, source packages and release streams: what a vulnerability scanner has to know about a Linux distribution."
date: 2026-10-31
---

Say a scanner reports that a RHEL 9 server runs OpenSSL 3.2.2, and that OpenSSL before 3.2.3 has a known flaw. (The versions here are illustrative.) Is the server vulnerable?

Often it is not. If Red Hat has already shipped the fix, the package on the server carries it. But the version still reads 3.2.2, so a scanner that compares version numbers calls it vulnerable. Anyone who has run a vulnerability scanner on Linux has seen this report. This post explains why it happens, what a scanner needs to get it right, and how heretix handles it.

## A fix can arrive without a new version

Enterprise distributions such as RHEL, Debian and Ubuntu LTS promise that a release stays the same for years. A security update must not add features or change behaviour, or an update that was meant to be safe could break production.

So when the upstream project fixes a flaw in 3.2.3, the distribution usually does not move to 3.2.3. It takes the fix, as a patch, and applies it to the version it ships. This is called a **backport**. Only the build number changes:

```
openssl-libs-3.2.2-6.el9   →   openssl-libs-3.2.2-7.el9    (fix backported)
```

The upstream version is still 3.2.2. The package is no longer vulnerable. Distribution version strings carry marks of their own after the upstream version. Take `5.6.1+really5.4.5-1ubuntu0.4`, a real Ubuntu 24.04 `liblzma5`: `+really5.4.5` says the code is really the 5.4.5 line, and `ubuntu0.4` counts Ubuntu's own updates to it. Neither says anything a comparison against an upstream version range can read.

## What matching by CPE sees

Some scanners, and most scripts people write themselves, start from the NVD. It describes an affected product with a **CPE** name and a range of upstream versions: "OpenSSL, versions before 3.2.3". That is the right way to describe the upstream project. It cannot describe a distribution's build, because a CPE has no field for "3.2.2 with the fix backported by Red Hat".

A scanner that matches installed packages against CPE ranges will therefore flag every backported package whose upstream version is still in the range. These are false positives, and on a distribution that backports its fixes, they can be a large share of the report. The costs add up:

- Teams spend time disproving findings instead of fixing real ones.
- A report with many wrong findings teaches people to ignore reports.
- "Upgrade to 3.2.3" is not how a fix reaches a RHEL 9 server. It arrives as an update to the distribution's own package.

CPE matching is the right tool for products that have no distribution behind them, such as a firewall, a VPN gateway or middleware you installed from a vendor archive. For the packages a distribution built, it is the wrong tool.

Good scanners know this, and for OS packages they read the distributions' own data instead. [Trivy](https://trivy.dev/) does. I scanned three hosts with both tools, a RHEL 9.8, a Debian 13 and an Ubuntu 24.04 host, on three different dates in October 2026. For the OS packages, wherever both reported a fix, they named the same fixed version, every time (1,712 of 1,712 on RHEL, 734 of 734 on Debian, and 6 of 6 on an Ubuntu host with 18 pending updates). So the question is not whether a scanner reads distribution data. It is how much of that data it uses, and how well. The rest of this post is about the points where that decides the answer.

## The distribution has already answered the question

Each distribution publishes, per package and per CVE, whether its builds are affected and which build contains the fix:

- **Red Hat** publishes CSAF **VEX** documents: for each CVE and product, a statement such as `known_affected`, `known_not_affected`, `fixed` or `under_investigation`. VEX stands for Vulnerability Exploitability eXchange: a vendor's own statement of whether a product is affected.
- **Debian** keeps a security tracker with the status of each CVE for each release and source package.
- **Ubuntu** keeps the Ubuntu CVE Tracker, with a status for each CVE, source package and release.
- **OSV** carries the distributions' records in one format, with the fixed versions written in the distribution's own version scheme.

A scanner that reads these sources compares the installed build with the distribution's fixed build, not with the upstream version. That is the whole difference between "OpenSSL 3.2.2 is before 3.2.3" and "`3.2.2-7.el9` carries the fix".

Using the distribution's data brings three details, and each one decides whether the answer is right.

## Detail 1: advisories name source packages, and installs are binary packages

One source package builds several binary packages. The Debian source `util-linux` builds `bsdutils`, `login`, `mount` and more. Advisories are written against the source and its version. What is installed on the machine is the binary, and its version can differ from the source's.

Debian 13 example: `bsdutils` is installed as `1:2.41-5`, built from `util-linux 2.41-5`. `login` is installed as `1:4.16.0-2+really2.41-5`, built from the same source. A fix was published in `util-linux 2.41.5-0+deb13u1`. Compare the binary versions directly and both look newer than the fix, so both look safe, while both were affected before it. The comparison has to use the source package and the source version.

This is not rare. In Debian 13 (main, amd64), about 5.5% of binary packages (3,796 of 68,825) have a version that differs from their source's by more than a binary rebuild suffix such as `+b1`.

## Detail 2: a fix lives in a release stream

RHEL is serviced in parallel lines: the current minor release, and older minors kept alive for customers, such as Extended Update Support. The same fix lands as different builds in each line, `el9_2`, `el9_4`, `el9_8`, and some fixes land in only some of them.

A build tagged `el9_8` has to be judged against the fix in the `el9_8` line. Using "the newest fix anywhere" is wrong: a build can look fixed because a different line has a higher number, when its own line has no fix at all. The tag says which line a build came from, so a build from a line that has no fix is affected: either the host should move to a build that has the fix, or no fix exists for it yet.

## Detail 3: "no fix" is information too

Many CVEs have no fix for a given release, and the distribution says why. Debian and Red Hat separate "we will fix it later" from "we will not fix it". Ubuntu's tracker has a state for "not yet looked at" (`needs-triage`). A report that lists every unfixed CVE the same way hides the difference between "act now", "wait for the update", "accept the risk" and "nobody knows yet". Carrying the reason with each finding lets a team sort the list by what they can actually do. Not every distribution publishes this; see the coverage notes below.

## How heretix handles it

heretix matches OS packages against distribution data, not against CPE ranges.

- **Distribution data.** Red Hat (OVAL and VEX), Oracle Linux, Debian, Ubuntu, Alpine, AlmaLinux and Rocky Linux records are matched against the installed build. RHEL-family packages use RPM version comparison and Debian and Ubuntu use dpkg comparison. Alpine uses a dpkg-style comparison, which approximates apk's own version rules.
- **Source packages.** heretix-cli records each Debian, Ubuntu and Alpine package's source package and source version, and heretix-api compares those. Signed kernels and boot loaders, which Debian and Ubuntu build from a template source, are checked as the source they were built from.
- **Release streams.** A RHEL build is judged against the fix of its own stream.
- **Reasons for no fix.** For RHEL, Debian and Ubuntu, findings with no fix carry a status (affected, deferred, will not fix, under investigation, not yet triaged) taken from Red Hat, the Debian security tracker and the Ubuntu CVE Tracker.
- **CPE where it belongs.** For firewalls, VPN gateways and products installed outside a package manager, heretix matches vendor advisories and CPE data, because there is no distribution build to consult.
- **VEX in both directions (beta).** heretix-management exports and imports CycloneDX VEX documents. An alert you decide to ignore can be exported as `not_affected` with a justification, so the decision travels with the SBOM.

One difference from my comparisons is worth stating, because a reader can check it. Trivy reported no finding on the kernel or the boot loaders of the Debian 13 host, and none on the signed kernel image of the Ubuntu 24.04 host, where it did report the kernel's other packages. That is one host each, and I do not know why.

Two limits to know. AlmaLinux, Rocky Linux and Alpine data lists only fixed vulnerabilities, and Oracle Linux has no data on unfixed ones, so on those distributions an unfixed CVE is not reported. And the reasons for no fix come from the three sources above, not from every distribution.

Each of these is documented in [heretix-api's data sources](https://github.com/TITeee/heretix-api/blob/main/docs/data-sources.md), with the limits of each source stated next to it.

## Where heretix was wrong

I did not get all of this right at first. Three examples, all found by checking heretix's results against Trivy's and the distribution's data on a real host, and all fixed:

- **Binary versions against source versions.** The `util-linux` example above was my mistake. heretix-api compared a binary package's own version with an advisory's source version, so `bsdutils` and `login` were taken as fixed before their fix ([#131](https://github.com/TITeee/heretix-api/pull/131), with heretix-cli 0.5.2).
- **A binary named like another source.** On Ubuntu 24.04 the kernel meta package `linux-aws` ships no code, but a source of the same name, `linux-aws`, is the older 6.8 kernel. The search also looked up the installed package's own name as if it were a source name, so the meta package was matched against that source's records and got findings that applied only to the older kernel ([#144](https://github.com/TITeee/heretix-api/pull/144)).
- **Stale data.** OSV moved Debian, Ubuntu and Alpine from one file per release to one file per distribution and stopped updating the old files, which still answer. The daily import kept reading the old Debian file, found nothing new, and reported success, so after the first import no Debian record was updated ([#129](https://github.com/TITeee/heretix-api/pull/129) and [#130](https://github.com/TITeee/heretix-api/pull/130)). A job now fails, instead of reporting success, when its file is missing, empty or no longer updated.

The first two are name and version mistakes of the kind this post describes. The third is the reminder that distribution data is only as good as it is fresh. That is why I think the details matter.

## Questions to ask any scanner

1. For a package on an enterprise distribution, does it compare the installed build with the distribution's fix, or with the upstream version range?
2. For Debian, Ubuntu and Alpine, does it match by source package and source version?
3. For RHEL, does it know which release stream a build is on?
4. When there is no fix, does it say why?

A scanner that answers "upstream version range" to the first question will report backported fixes as open vulnerabilities. That is not a matter of tuning. The information the scanner needs is in a different place.

A caution about numbers: counts of findings are not a measure of quality. Both a missed finding and a wrong one cost a team time, and the same vulnerability can be counted once per installed package. Compare scanners on a real host and check each difference against the distribution's own data, as the comparisons linked below do.

## Try it

heretix is open source (Apache-2.0) and self-hosted.

- [Deploy it](https://titeee.github.io/heretix-web/docs/) with Docker Compose and scan a host with heretix-cli.
- Read how each source is used: [heretix-api data sources](https://github.com/TITeee/heretix-api/blob/main/docs/data-sources.md).
- Read worked examples that check every difference between heretix and Trivy against the distribution's own data: [RHEL 9](https://github.com/TITeee/heretix-api/blob/main/docs/detection-comparison-rhel9.md), [Debian 13](https://github.com/TITeee/heretix-api/blob/main/docs/detection-comparison-debian13.md), [Ubuntu 24.04](https://github.com/TITeee/heretix-api/blob/main/docs/detection-comparison-ubuntu2404.md).
