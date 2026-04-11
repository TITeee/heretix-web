export const en = {
  // Meta
  siteTitle: 'heretix',
  siteDescription: 'Open-source vulnerability management platform for Linux servers and container environments.',

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
  cliDescription: 'A command-line tool that scans Linux servers and Docker images for installed packages (RPM, DPKG, npm, PyPI, Go, Composer/PHP) and queries heretix-api for known vulnerabilities. Also supports CycloneDX SBOM export.',
  apiName: 'heretix-api',
  apiDescription: 'A REST API that aggregates and normalizes vulnerability data from NVD, OSV, CISA KEV, EPSS, vendor advisories (Fortinet, Palo Alto, Cisco), and Oracle Linux OVAL feeds.',
  managementName: 'heretix-management',
  managementDescription: 'A web console that imports packages collected by heretix-cli as assets, detects and manages vulnerabilities. Also supports automatic alert resolution based on package version tracking.',

  // Features
  featuresTitle: 'Key Features',
  feature1Title: 'Multi-Ecosystem Scanning',
  feature1Desc: 'Supports RPM, DPKG, npm, PyPI, Go, and Composer (PHP) package ecosystems on Linux hosts and Docker images. Integrates with CI/CD pipelines to detect vulnerabilities before deployment.',
  feature2Title: 'Aggregated Vulnerability Data',
  feature2Desc: 'Consolidates CVE data from NVD, OSV, and vendor advisories into a single normalized database.',
  feature3Title: 'CISA KEV Tracking',
  feature3Desc: 'Flags vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalog for priority attention.',
  feature4Title: 'EPSS Scoring',
  feature4Desc: 'Includes Exploit Prediction Scoring System scores to help prioritize remediation efforts.',
  feature5Title: 'Vendor Advisory Support',
  feature5Desc: 'Incorporates advisories from Fortinet, Palo Alto Networks, and Cisco PSIRT.',
  feature6Title: 'Dashboard Analytics',
  feature6Desc: 'Visualize vulnerability trends, severity distributions, and top affected assets in a web console.',

  // QuickStart
  quickstartTitle: 'Quick Start',
  quickstartStep1: '1. Run heretix-cli to collect packages',
  quickstartStep2: '2. Import the inventory into heretix-management',
  quickstartStep3: '3. Run a vulnerability scan',

  // Footer
  footerLicense: 'Licensed under Apache 2.0',
  footerOrg: 'heretix project',
};

export type UIStrings = typeof en;
