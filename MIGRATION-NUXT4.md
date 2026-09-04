# Nuxt 4 migration

This project has been migrated from Nuxt 3 to Nuxt 4.

## Main changes

- Nuxt upgraded to 4.5.2.
- Application source moved into the Nuxt 4 `app/` directory.
- `public/` and `server/` remain at project root as required by Nuxt 4.
- Tailwind content paths updated for the new directory layout.
- `@nuxt/icon` retained at 2.5.1 and app configuration updated to the current `icon` key.
- Local Iconify collections added for the `uil` and `simple-icons` icon sets used by the site.
- Existing Kialla Computers shop branding, pages and content retained.
- Security headers retained in `routeRules`.
- Nuxt DevTools remain disabled.

## Local validation

Run:

```bash
npm install
npm audit
npm run build
```

The package registry was too slow in the conversion environment to complete `npm install`, so a generated lockfile is not included. Commit the resulting `package-lock.json` after a successful install.
