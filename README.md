# heretix-web

Landing page for the [heretix](https://github.com/TITeee) vulnerability management project.

**Live site:** https://titeee.github.io/heretix-web/

## Related repositories

- [heretix-api](https://github.com/TITeee/heretix-api) — vulnerability intelligence API (NVD, OSV, CVE Records, EPSS, KEV, vendor PSIRT advisories)
- [heretix-cli](https://github.com/TITeee/heretix-cli) — scans servers, containers, and OSS dependencies for known CVEs, emits CycloneDX SBOMs
- [heretix-management](https://github.com/TITeee/heretix-management) — vulnerability management dashboard (assets, alerts, SLA, VEX)

## Development

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # outputs to ./dist/
pnpm preview   # preview the production build locally
```

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site with Astro and publishes `dist/` to GitHub Pages via `actions/deploy-pages`.

## Stack

Astro 7, Tailwind CSS 4.
