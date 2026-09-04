import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to https://<username>.github.io/<repo-name>/
// change base to '/<repo-name>/'.
// If you use a custom domain (nicolestottportfolio.com) or a
// <username>.github.io root site, keep base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
