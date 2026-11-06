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

Paketmanager ist [pnpm](https://pnpm.io).

```bash
pnpm install      # einmalig
pnpm dev          # lokale Vorschau unter http://localhost:4321
pnpm build        # prüft die Typen und baut nach dist/
pnpm preview      # zeigt den gebauten Stand
```

## Veröffentlichen bei cyon

Gebaut wird lokal, auf den Server kommt nur der Inhalt von `dist/`. Ziel ist `/home/janowsky/public_html/simonbalz/` auf `janowsky@janowsky.ch`, die Anmeldung läuft über den SSH-Schlüssel.

```bash
pnpm run deploy:check   # baut und zeigt, was hochgeladen und gelöscht würde, ohne etwas zu ändern
pnpm run deploy         # baut und lädt hoch
```

`pnpm deploy` ohne `run` ist ein eingebauter pnpm-Befehl und startet nicht dieses Skript.

Vor dem Upload setzt das Skript alle Dateien in `dist/` auf «für alle lesbar». Sonst antwortet der Server mit 403 auf Dateien, die lokal nur für den eigenen Benutzer lesbar sind.

Der Upload verwendet `rsync --delete`: Im Zielverzeichnis wird alles entfernt, was nicht aus dem Build stammt, ausser `.well-known/`. Das Verzeichnis darf deshalb nichts anderes enthalten. Die Weiterleitung auf HTTPS wird im my.cyon eingestellt, nicht in der `.htaccess`.

## Drittanbieter

Schrift: [Archivo](https://github.com/Omnibus-Type/Archivo) von Omnibus-Type, SIL Open Font License 1.1.
