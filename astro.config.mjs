import { defineConfig } from 'astro/config';

// Statische Ausgabe nach dist/, ohne Adapter: cyon liefert nur fertige Dateien aus.
export default defineConfig({
  site: 'https://simonbalz.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
