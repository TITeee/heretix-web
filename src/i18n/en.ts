export const en = {
  // Meta
  siteTitle: 'heretix',
  siteDescription: 'Open-source vulnerability management platform for servers, containers, and CI/CD pipelines.',

  // Nav
  navDocs: 'Docs',
  navGitHub: 'GitHub',

  // Hero
  heroTagline: 'Open-Source Vulnerability Management',
  heroDescription: 'Scan, track, and manage vulnerabilities across your Linux servers and container images, from the command line to the dashboard.',
  heroCTAPrimary: 'Get Started',
  heroCTASecondary: 'View on GitHub',

  // Overview
  overviewTitle: 'What is heretix?',
  overviewBody: 'heretix is an open-source vulnerability management platform composed of three components: a CLI scanner, a vulnerability data API, and a web management console. Together they provide a complete workflow, from scanning your infrastructure to tracking remediation.',

  // Architecture
  architectureTitle: 'How It Works',

  // Components
  componentsTitle: 'Components',
  cliName: 'heretix-cli',
  cliDescription: 'A command-line tool that scans Linux servers, Windows hosts, and Docker images for installed packages (RPM, DPKG, Alpine/APK, npm, PyPI, Go, Composer/PHP) and queries heretix-api for known vulnerabilities. Supports Docker registry authentication (ECR, GCR, Docker Hub) and Dockerfile base image chain scanning for supply-chain visibility. Performs local supply-chain security checks (GlassWorm, Dependency Confusion, Malicious Install Scripts, CI/CD Pipeline Poisoning, Hardcoded Secrets, Lock File Integrity) without API access. Exports CycloneDX SBOM and submits inventory to the GitHub Dependency Submission API. Structured exit codes (0/1/2) for CI/CD integration.',
  apiName: 'heretix-api',
  apiDescription: 'A REST API that aggregates and normalizes vulnerability data from 14+ sources: NVD, OSV, CISA KEV, EPSS, OSSF Malicious Packages, Oracle Linux OVAL, Oracle CPU, and vendor advisories from Fortinet, Palo Alto, Cisco PSIRT, Sophos, SonicWall PSIRT, and Broadcom/VMware VMSA.',
  managementName: 'heretix-management',
  managementDescription: 'A web console for end-to-end vulnerability management. Import heretix-cli inventory JSON or CycloneDX SBOMs, register network devices and firewalls manually, and manage software packages outside package managers with CPE and vendor advisory support. Features include: VEX document export/import (CycloneDX), alert timeline with automatic event recording, bulk status updates, CSV/JSON export, vulnerability search by package/CVE/CPE/advisory, an activity page aggregating all alert events, metadata refresh to pull the latest CVSS/EPSS/KEV data, scheduled daily jobs, user management with admin/operator roles, and structured JSON logging.',

  // Features
  featuresTitle: 'Key Features',
  feature1Title: 'Multi-Ecosystem Scanning',
  feature1Desc: 'Supports RPM, DPKG, Alpine/APK, npm, PyPI, Go, and Composer (PHP) package ecosystems on Linux and Windows hosts and Docker images. Authenticates with ECR, GCR, and Docker Hub registries. Integrates with CI/CD pipelines via structured exit codes (0=pass, 1=findings, 2=error).',
  feature2Title: 'Aggregated Vulnerability Data',
  feature2Desc: 'Consolidates CVE data from NVD, OSV, and vendor advisories into a single normalized database.',
  feature3Title: 'CISA KEV Tracking',
  feature3Desc: 'Flags vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalog for priority attention.',
  feature4Title: 'EPSS Scoring',
  feature4Desc: 'Includes Exploit Prediction Scoring System scores to help prioritize remediation efforts.',
  feature5Title: 'Vendor Advisory Support',
  feature5Desc: 'Incorporates advisories from Fortinet, Palo Alto Networks, Cisco PSIRT, Sophos, SonicWall PSIRT, and Broadcom/VMware VMSA. Also tracks OSSF malicious packages (MAL- entries).',
  feature6Title: 'Dashboard Analytics',
  feature6Desc: 'Visualize vulnerability trends, severity distributions, and top affected assets in a web console.',
  feature7Title: 'Local Supply-Chain Security',
  feature7Desc: 'Detects supply-chain attacks without API access: invisible character injection (GlassWorm), dependency confusion, malicious install scripts, CI/CD pipeline poisoning, hardcoded secrets, and lock file integrity violations.',
  feature8Title: 'VEX Support (Beta)',
  feature8Desc: 'Export and import CycloneDX VEX documents from heretix-management. Ignored alerts are exported as not_affected with justification codes (code_not_reachable, requires_configuration, etc.).',
  feature9Title: 'GitHub Dependency Submission',
  feature9Desc: 'Submit scanned inventory to the GitHub Dependency Submission API with a single CLI command, enabling native Dependabot alerts on your repositories without changing your existing workflow.',

  // QuickStart
  quickstartTitle: 'Quick Start',
  quickstartStep1: '1. Run heretix-cli to collect packages',
  quickstartStep2: '2. Import the inventory into heretix-management',
  quickstartStep3: '3. Run a vulnerability scan',
  quickstartStep4: '4. Submit to GitHub for Dependabot alerts (optional)',

  // Footer
  footerLicense: 'Licensed under Apache 2.0',
  footerOrg: 'heretix project',
};

export type UIStrings = typeof en;
