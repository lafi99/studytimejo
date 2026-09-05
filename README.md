# Study Time Website

Bilingual (EN/AR) website for Study Time — study house & coffee in Al-Yasmeen, Amman.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy (GitHub Pages)

Pushing to `main` deploys automatically via GitHub Actions.

After the first push:
1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**, set Source to **GitHub Actions**
3. Wait for the workflow to finish
4. Site URL will look like: `https://<username>.github.io/studytimejo/`

Optional: add custom domain `studytimejo.com` in Pages settings once DNS is ready.
