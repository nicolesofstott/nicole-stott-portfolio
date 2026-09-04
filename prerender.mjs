// Runs after `vite build`. Renders every route to its own HTML file in dist/,
// so each page ships as real HTML that React hydrates in the browser.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname } from 'node:path'
import { projects } from './src/data/projects.js'

const template = readFileSync('dist/index.html', 'utf8')
const { render } = await import('./dist/server/entry-server.js')

const routes = [
  { url: '/', title: 'Home | Nicole Stott' },
  { url: '/about', title: 'About | Nicole Stott' },
  { url: '/projects', title: 'Projects | Nicole Stott' },
  ...projects.map((p) => ({
    url: `/projects/${p.slug}`,
    title: `${p.title} | Nicole Stott`,
  })),
]

for (const { url, title } of routes) {
  let html = template.replace('<!--app-html-->', render(url))
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
  const file = url === '/' ? 'dist/index.html' : `dist${url}/index.html`
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
  console.log('prerendered', file)
}

// The server bundle was only needed for this step.
rmSync('dist/server', { recursive: true, force: true })
