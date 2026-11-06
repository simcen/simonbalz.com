# simonbalz.com

Persönliche Website von Simon Balz. Statische Seite, gebaut mit [Astro](https://astro.build) und TypeScript, gehostet bei cyon.

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `src/i18n/de.ts`, `src/i18n/en.ts` | Alle Texte pro Sprache. `de.ts` gibt die Struktur vor, TypeScript meldet fehlende Felder in `en.ts`. |
| `src/site.ts` | Angaben, die in beiden Sprachen gleich sind (E-Mail, Profile, Arbeitgeber). |
| `src/components/` | Die Abschnitte der Seite. `Home.astro` setzt sie zusammen, `icons.ts` enthält die Piktogramme. |
| `src/layouts/Base.astro` | HTML-Kopf mit Metadaten, hreflang und strukturierten Daten. |
| `src/pages/` | Eine Datei pro Adresse: `/`, `/en/` und die 404-Seite. |
| `src/styles/site.css` | Das gesamte Design. |
| `public/` | Dateien, die unverändert ausgeliefert werden: Bilder, Schrift, `robots.txt`, `sitemap.xml`, `llms.txt`, `.htaccess`. |

## Befehle

```bash
npm install       # einmalig
npm run dev       # lokale Vorschau unter http://localhost:4321
npm run build     # prüft die Typen und baut nach dist/
npm run preview   # zeigt den gebauten Stand
```

## Veröffentlichen bei cyon

Gebaut wird lokal, auf den Server kommt nur der Inhalt von `dist/`. Das Zielverzeichnis darf nichts anderes enthalten, weil `--delete` alles entfernt, was nicht aus dem Build stammt.

```bash
npm run build
rsync -az --delete --chmod=Dgo+rx,Fgo+r --exclude '.well-known/' ./dist/ <login>@<host>:<document root>/
```

`<login>`, `<host>` und `<document root>` stehen im my.cyon. Die Weiterleitung auf HTTPS wird dort eingestellt, nicht in der `.htaccess`.

## Drittanbieter

Schrift: [Archivo](https://github.com/Omnibus-Type/Archivo) von Omnibus-Type, SIL Open Font License 1.1.
