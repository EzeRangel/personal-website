# ezerangel.com

Sitio personal de Ezequiel Rangel. Next.js 16 (App Router, Cache Components) con TypeScript estricto.
Home en inglés (`/`) y español (`/es`), modo claro y oscuro.

## Requisitos

- Node.js 22 o superior
- **npm** (es el gestor de paquetes del proyecto; el lockfile es `package-lock.json`)

## Comandos

```bash
npm install          # instalar dependencias
npm run dev          # desarrollo en http://localhost:3000
npm run build        # build de producción
npm run start        # servir la build de producción
npm run lint         # ESLint
npm run typecheck    # TypeScript (tsc --noEmit)
```

Variables de entorno (en `.env.local` o en Vercel):

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | ID de medición de Google Analytics 4. Sin ella, GA4 no se carga aunque el visitante acepte. |

## Dónde editar

| Qué | Dónde |
| --- | --- |
| Textos fijos (Home, navegación, pie, cookies, 404) | `messages/en.ts` y `messages/es.ts`. Mismas claves en los dos. |
| Proyectos del bloque Work | `content/work/<slug>/{en,es}.mdx` (frontmatter: `name`, `line`, `year`, `status`, `order`) |
| Escritos | `content/writing/<slug>/{en,es}.mdx` (frontmatter: `title`, `date`, `summary`, `readingTime`). Si falta `es.mdx`, `/es` lo muestra como "Solo en inglés". |
| Correo, redes, URL del sitio | `config/site.ts` |
| Colores, espaciado, duraciones | `styles/tokens.css` (generado desde el design system; no agregues valores sueltos) |
| Estilos de componentes | `styles/components.css` (clases `er-*`) y `styles/layout.css` (clases `pg-*`) |
| Redirecciones 301 | `next.config.ts` |
| URLs retiradas (410) | `proxy.ts` |

El orden de los proyectos sale de `order`. Cambiar `status` o `year` en el MDX cambia el Home en la siguiente build.
El Home muestra los 3 escritos más recientes; si no hay ninguno, la sección se oculta y Contact pasa a ser 04.

## Estructura

```
app/
  [locale]/layout.tsx         <html lang>, fuentes, script de tema, header, footer, avisos
  [locale]/page.tsx           Home (/ y /es), metadatos, JSON-LD Person
  [locale]/not-found.tsx      404 dentro de un idioma (cuando una página llama notFound())
  [locale]/opengraph-image.tsx  Imagen OG por idioma (next/og)
  global-not-found.tsx        404 para URLs que no existen (estado 404 real)
  sitemap.ts, robots.ts
proxy.ts                      / → /en interno, /en → / (308), 410 de URLs retiradas
components/layout|home|ui     Componentes; los de ui-sdk están envueltos (MobileMenu, ThemeSelect)
lib/                          i18n, contenido (frontmatter), tema, consentimiento, analytics, fuentes
assets/fonts                  Fuentes del sitio (woff2, cargadas con next/font/local)
assets/og-fonts               Las mismas fuentes como TTF estáticos: next/og no lee woff2 ni fuentes variables
```

## Notas

- **Idioma:** inglés sin prefijo y español en `/es`. Nunca se redirige por idioma del navegador; si el navegador prefiere el otro idioma, aparece un aviso que se puede cerrar.
- **Tema:** System / Light / Dark. Un script inline en `<head>` pone `data-theme` antes del primer pintado. La elección se guarda en `localStorage` (`er-theme`).
- **Analytics:** GA4 solo se carga después de Accept en el aviso de cookies (`localStorage`, `er-consent`). Los eventos se declaran en el marcado con `data-track="<evento>"` y `data-track-<parámetro>`.
- **ui-sdk** (`@ui-sdk/core`, `@ui-sdk/react`) está en beta y fijado a una versión exacta. Las páginas nunca lo importan directo.
- **404:** con Cache Components, un `notFound()` dentro de una página ya empezó a responder con 200 (lleva `noindex`). Las URLs que no existen terminan en `app/global-not-found.tsx`, que sí responde 404; como el layout raíz está bajo `[locale]`, esa página no sabe el idioma y muestra el texto en inglés con la línea en español.
- **Deploy:** usa preview deployments hasta que existan `/work`, `/writing`, `/about` y `/privacy`; el Home ya enlaza a esas rutas.
