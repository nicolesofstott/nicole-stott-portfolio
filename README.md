# Nicole Stott — Portfolio

A React rebuild of nicolestottportfolio.com. Built with Vite and React Router, **pre-rendered to static HTML at build time**: every page ships as real HTML for fast loads and SEO, then React hydrates it in the browser for dynamic rendering and instant navigation. Deployed to GitHub Pages automatically on every push.

## Where everything lives

Each part of the site is its own file — pages, styling, and content are all separate:

```
src/
├── data/projects.js        ← ALL text and image URLs (edit content here)
├── components/
│   ├── Nav.jsx  + Nav.css      ← banner + top navigation
│   └── Footer.jsx + Footer.css ← footer
├── pages/
│   ├── Home.jsx     + Home.css
│   ├── About.jsx    + About.css
│   ├── Projects.jsx + Projects.css   ← the grid
│   └── Project.jsx  + Project.css    ← individual project layout
├── index.css               ← global colours, fonts, spacing tokens
└── App.jsx                 ← routes (which URL shows which page)
```

To restyle one page, edit its `.css` file. To change text, edit `data/projects.js`. Global look (colours/fonts) lives in `index.css`.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Deploy to GitHub Pages (one-time setup)

1. Create a new GitHub repository and push this folder to it (branch: `main`).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push any commit — the included workflow (`.github/workflows/deploy.yml`) builds and publishes the site automatically.

Your site will be live at `https://<username>.github.io/<repo-name>/`.

**If deploying to a repo subpath** (i.e. not a custom domain), open `vite.config.js` and change `base: '/'` to `base: '/<repo-name>/'`, and in `public/404.html` the redirect will still land on the homepage — deep links resolve once you move to a custom domain at the root.

## Pointing your custom domain at it

When you're ready to move nicolestottportfolio.com off Wix:

1. In the GitHub repo: **Settings → Pages → Custom domain** → enter `www.nicolestottportfolio.com` (this creates a `CNAME` file).
2. In your domain's DNS settings: add a `CNAME` record pointing `www` to `<username>.github.io`.
3. Keep `base: '/'` in `vite.config.js`.
4. Enable **Enforce HTTPS** once the certificate is issued.

## ⚠️ Before cancelling Wix: migrate the images

The hero and banner images currently load from Wix's CDN (`static.wixstatic.com`), so they will **break when the Wix site is deleted**. Before cancelling:

1. Download each image (all URLs are listed in `src/data/projects.js` — open them in a browser and save).
2. Put them in `public/images/`.
3. Replace each URL in `src/data/projects.js` with the local path, e.g. `/images/thesis_framework.png`.
4. Commit and push.

## SEO note

The old About page lived at `/blank` on Wix; here it's `/about`. Since the site is only days old and barely indexed, there's nothing to redirect — but if you've shared any `/blank` links, update them.
