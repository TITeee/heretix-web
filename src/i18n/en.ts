export const en = {
  // Meta
  siteTitle: 'heretix',
  siteDescription: 'heretix tracks CVEs across firewalls, VPN appliances, servers, containers, and language packages in one inventory — no active scanning of network devices. Apache-2.0, self-hosted.',

  // Nav
  navDocs: 'Docs',
  navGitHub: 'GitHub',

  // Hero
  heroTagline: 'One CVE inventory for servers, containers, and the appliances you can’t scan.',
  heroDescription: 'heretix tracks known vulnerabilities on firewalls and VPN gateways by matching vendor advisories against inventory — no active scanning of the device. The same inventory also covers OS packages, containers, and language dependencies. Apache-2.0, self-hosted.',
  heroCTAPrimary: 'Get Started',
  heroCTASecondary: 'Star on GitHub',

  // Stats
  stat1Value: '9',
  stat1Label: 'Vendor PSIRT feeds tracked',
  stat2Value: '11',
  stat2Label: 'OS & language ecosystems',
  stat3Value: '6',
  stat3Label: 'Supply-chain detectors',
  stat4Value: '0',
  stat4Label: 'Active scans of your appliances',

  // Target Assets
  assetsTitle: 'What heretix tracks',
  assetsSubtitle: 'One inventory, matched against each vendor’s own advisories — no agent or active scan running on the device itself.',
  assetsNetworkTitle: 'Network devices & appliances',
  assetsNetworkDesc: 'Firewalls, VPN gateways, and security appliances from Fortinet, Palo Alto Networks, Cisco, Sophos, SonicWall, Broadcom/VMware, and Check Point.',
  assetsOsTitle: 'Server operating systems',
  assetsOsDesc: 'RHEL, AlmaLinux, Rocky Linux, Oracle Linux, CentOS, Debian, Ubuntu, and Alpine, matched against distro-specific advisory feeds.',
  assetsMiddlewareTitle: 'Middleware',
  assetsMiddlewareDesc: 'Apache HTTP Server, Apache Tomcat, nginx, Zabbix, Splunk, and Oracle products (WebLogic, Java SE, MySQL, E-Business Suite, and more via Oracle CPU).',
  assetsPackagesTitle: 'Language packages',
  assetsPackagesDesc: 'npm/yarn/pnpm, PyPI, Go modules (and statically linked Go binaries), Composer, Maven, Gradle, and Java archives (JAR/WAR/EAR).',
  assetsContainerTitle: 'Container images',
  assetsContainerDesc: 'Scan a Docker image directly, including the FROM base image chain from a Dockerfile.',
  assetsCnaTitle: 'Every other vendor, via CVE Record',
  assetsCnaDesc: 'For vendors with no dedicated fetcher above, heretix ingests the affected products and version ranges vendors themselves declare in every published CVE Record from the CVE Program — so coverage isn’t limited to the vendors listed here.',

  // Overview
  overviewTitle: 'What is heretix?',
  overviewBody: 'heretix is an open-source vulnerability management platform composed of three components: a CLI scanner, a vulnerability data API, and a web management console. Together they provide a complete workflow, from scanning your infrastructure to detecting supply-chain attacks to tracking remediation.',

  // Supply-Chain Defense (headline section)
  scTitle: 'Detect attacks, not just CVEs',
  scSubtitle: 'CVE scanners only tell you about known vulnerabilities. heretix-cli also detects active supply-chain attacks locally — no API, no network required — so you can gate them in CI before they ship.',
  scGlasswormTitle: 'GlassWorm',
  scGlasswormDesc: 'Invisible / zero-width Unicode characters injected into source to hide malicious code from human review.',
  scDepConfusionTitle: 'Dependency Confusion',
  scDepConfusionDesc: 'Substitution and "Shai-Hulud"-style attacks where a public package shadows your private one.',
  scInstallTitle: 'Malicious Install Scripts',
  scInstallDesc: 'Dangerous commands hidden in npm lifecycle hooks and Python setup.py that run on install.',
  scCicdTitle: 'CI/CD Pipeline Poisoning',
  scCicdDesc: 'Suspicious patterns in GitHub Actions, GitLab CI, Jenkins, and other pipeline definitions.',
  scSecretsTitle: 'Hardcoded Secrets',
  scSecretsDesc: 'Credentials and API keys committed into source and configuration files.',
  scLockfileTitle: 'Lock File Integrity',
  scLockfileDesc: 'Weak hashes, missing signatures, and manifest/lockfile drift that signal tampering.',

  // Architecture
  architectureTitle: 'How It Works',

  // Showcase
  showcaseTitle: 'See it in action',
  showcaseSubtitle: 'A full management console: dashboards, asset inventory, and alert triage in one self-hosted app.',
  showcaseCaptionDashboard: 'Dashboard — severity breakdown, trends, and KEV highlights',
  showcaseCaptionTags: 'Tag analytics — risk by Internet Facing / Public Endpoint',
  showcaseCaptionAssets: 'Asset inventory imported from heretix-cli',
  showcaseCaptionAlerts: 'Alert triage with multi-value filters and bulk actions',
  showcaseCaptionAlertsDetail: 'Alert detail — CVSS, KEV, EPSS, fixed version, and timeline',

  // Components
  componentsTitle: 'Components',
  cliName: 'heretix-cli',
  cliDescription: 'A command-line tool that scans Linux servers, Windows hosts, and Docker images for installed packages across RPM, DPKG, Alpine/APK, npm/yarn/pnpm, PyPI (from actual `site-packages` installs, not just lockfiles), Go modules (plus modules statically linked into a compiled binary), Composer, Maven, Gradle, and Java archives (JAR/WAR/EAR), then queries heretix-api for known vulnerabilities. Findings are collapsed per source package and kernel-header/build-toolchain packages are tagged separately — on one measured image, `--runtime-only` cut findings from 1485 to 721 to 267. Supports Docker registry authentication (ECR, GCR, Docker Hub) and Dockerfile base image chain scanning. Performs local supply-chain security checks (GlassWorm, Dependency Confusion, Malicious Install Scripts, CI/CD Pipeline Poisoning, Hardcoded Secrets, Lock File Integrity) without API access — run them anytime with the offline `detect` command (beta). Exports CycloneDX SBOM with a full dependency tree, package integrity hashes, and distro-qualified PURLs, and submits inventory to the GitHub Dependency Submission API. Structured exit codes (0/1/2) for CI/CD integration.',
  apiName: 'heretix-api',
  apiDescription: 'A REST API that aggregates and normalizes vulnerability data from NVD, OSV, CISA KEV, EPSS, and every published CVE Record — including CNA-declared affected products and CISA Vulnrichment’s SSVC assessment (exploitation state, automatability, technical impact; final priority scoring is left to you). Vendor PSIRT advisories cover Fortinet, Palo Alto Networks, Cisco, Sophos, SonicWall, Broadcom/VMware, Check Point, Red Hat, Oracle Linux, Oracle CPU, Splunk, Apache HTTP Server, Apache Tomcat, nginx, and Zabbix. Search results report the fixed version for each finding, alongside CPE 2.3 and batch lookup endpoints.',
  managementName: 'heretix-management',
  managementDescription: 'A web console for end-to-end vulnerability management. Import heretix-cli inventory JSON or CycloneDX SBOMs, register network devices and firewalls manually, and manage software packages outside package managers with CPE and vendor advisory support. Features include: an interactive dependency graph (beta) with direct/indirect classification, VEX document export/import (beta, CycloneDX), configurable SLA due dates by severity with a fixed override for CISA KEV, alert timeline with automatic event recording, fixed-version display, bulk status updates, CSV/JSON export, vulnerability search by package/CVE/CPE/advisory, metadata refresh to pull the latest CVSS/EPSS/KEV data, scheduled daily jobs, user management with admin/operator roles, an admin-only audit log, and structured JSON logging.',

  // Features
  featuresTitle: 'Key Features',
  feature1Title: 'Multi-Ecosystem Scanning',
  feature1Desc: 'Supports RPM, DPKG, Alpine/APK, npm/yarn/pnpm, PyPI, Go (modules and statically linked binaries), Composer, Maven, Gradle, and Java archives on Linux and Windows hosts and Docker images. Authenticates with ECR, GCR, and Docker Hub registries. Integrates with CI/CD pipelines via structured exit codes (0=pass, 1=findings, 2=error).',
  feature2Title: 'Aggregated Vulnerability Data',
  feature2Desc: 'Consolidates CVE data from NVD, OSV, and vendor advisories into a single normalized database.',
  feature3Title: 'CISA KEV Tracking',
  feature3Desc: 'Flags vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalog for priority attention.',
  feature4Title: 'EPSS Scoring',
  feature4Desc: 'Includes Exploit Prediction Scoring System scores to help prioritize remediation efforts.',
  feature5Title: 'Vendor Advisory Support',
  feature5Desc: 'Incorporates advisories from Fortinet, Palo Alto Networks, Cisco PSIRT, Sophos, SonicWall PSIRT, Broadcom/VMware VMSA, Check Point, Splunk, Apache HTTP Server, Apache Tomcat, nginx, and Zabbix. Also tracks OSSF malicious packages (MAL- entries).',
  feature6Title: 'Dashboard Analytics',
  feature6Desc: 'Visualize vulnerability trends, severity distributions, and top affected assets in a web console.',
  feature7Title: 'Local Supply-Chain Security',
  feature7Desc: 'Detects supply-chain attacks without API access: invisible character injection (GlassWorm), dependency confusion, malicious install scripts, CI/CD pipeline poisoning, hardcoded secrets, and lock file integrity violations.',
  feature8Title: 'VEX Support (Beta)',
  feature8Desc: 'Export and import CycloneDX VEX documents from heretix-management. Ignored alerts are exported as not_affected with justification codes (code_not_reachable, requires_configuration, etc.).',
  feature9Title: 'GitHub Dependency Submission',
  feature9Desc: 'Submit scanned inventory to the GitHub Dependency Submission API with a single CLI command, enabling native Dependabot alerts on your repositories without changing your existing workflow.',
  feature10Title: 'Dependency Graph (Beta)',
  feature10Desc: 'Interactive graph in heretix-management showing which packages pull in a vulnerable dependency. Classify direct vs. indirect, drill into the dependents tab, and open alert details straight from a graph node.',
  feature11Title: 'Fix Version Guidance',
  feature11Desc: 'heretix-api reports the version that fixes each finding, surfaced on the heretix-management alert detail so teams know exactly which upgrade clears the vulnerability.',
  feature12Title: 'Local-Only Detect',
  feature12Desc: 'The heretix-cli detect command runs every supply-chain detector fully offline — no API required — with parallel execution and CI-friendly exit codes.',

  // QuickStart
  quickstartTitle: 'Quick Start',
  quickstartStep1: '1. Run heretix-cli to collect packages',
  quickstartStepDetect: '1b. Gate supply-chain attacks in CI (offline, no API)',
  quickstartStep2: '2. Import the inventory into heretix-management',
  quickstartStep3: '3. Run a vulnerability scan',
  quickstartStep4: '4. Submit to GitHub for Dependabot alerts (optional)',

  // Footer
  footerLicense: 'Licensed under Apache 2.0',
  footerOrg: 'heretix project',
};

export type UIStrings = typeof en;
