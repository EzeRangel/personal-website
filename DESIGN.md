---
version: alpha
name: Ezequiel Rangel
description: Sistema de diseño de ezerangel.com. Papel cálido, tinta casi negra y un solo acento (Azul Plano). Serif editorial para las ideas, Geist para leer, Geist Mono para los datos. El cursor de bloque es la firma.
colors:
  primary: "#2E2BE8"
  primary-hover: "#2826CC"
  on-primary: "#FFFFFF"
  on-primary-muted: "#E0DFFC"
  on-primary-line: "#716FEF"
  background: "#F3F1EC"
  surface: "#FBFAF7"
  on-surface: "#141414"
  on-surface-muted: "#5C5850"
  outline: "#D6D1C6"
  outline-strong: "#8C877C"
  focus: "#2E2BE8"
  dark:
    primary: "#8C8CFF"
    primary-hover: "#9A9AFF"
    on-primary: "#0F0F11"
    on-primary-muted: "#222235"
    on-primary-line: "#6464B3"
    background: "#0F0F11"
    surface: "#18181B"
    on-surface: "#ECEAE4"
    on-surface-muted: "#A19D94"
    outline: "#2C2C31"
    outline-strong: "#6B6862"
    focus: "#8C8CFF"
typography:
  display:
    fontFamily: Instrument Serif
    fontSize: 128px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.02em
  h1:
    fontFamily: Instrument Serif
    fontSize: 88px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.015em
  h2:
    fontFamily: Instrument Serif
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.01em
  opinion:
    fontFamily: Instrument Serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.01em
  h3:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.005em
  title-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: -0.005em
  lead:
    fontFamily: Geist
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  ui:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.005em
  small:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Geist Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.06em
  code:
    fontFamily: Geist Mono
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: 0px
  sm: 2px
  full: 999px
spacing:
  space-1: 4px
  space-2: 8px
  space-3: 12px
  space-4: 16px
  space-6: 24px
  space-8: 32px
  space-12: 48px
  space-16: 64px
  space-24: 96px
  space-32: 128px
  space-48: 192px
  container-max: 1360px
  gutter: 24px
  page-margin: 48px
  hit-target: 44px
motion:
  state-change:
    duration: 120ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  micro:
    duration: 200ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  surface-enter:
    duration: 320ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  cursor-blink:
    duration: 500ms
    timingFunction: steps(1, end)
components:
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: 0 20px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: 0 20px
  button-secondary-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
  text-link:
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  section-label:
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label}"
  status-chip:
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 3px 10px
  work-block:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    padding: 48px 0 32px
  project-row:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.h3}"
    padding: 24px 12px
  project-row-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  article-row:
    textColor: "{colors.on-surface}"
    typography: "{typography.title-sm}"
    padding: 24px 0
  opinion:
    textColor: "{colors.on-surface}"
    typography: "{typography.opinion}"
    padding: 24px 0
  contact-address:
    textColor: "{colors.on-surface}"
    typography: "{typography.h3}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
  divider:
    backgroundColor: "{colors.outline}"
    height: 1px
  control-border:
    backgroundColor: "{colors.outline-strong}"
    width: 1px
  focus-ring:
    backgroundColor: "{colors.focus}"
    width: 2px
  work-block-divider:
    backgroundColor: "{colors.on-primary-line}"
    height: 1px
  project-row-line:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary-muted}"
    typography: "{typography.body}"
  page-dark:
    backgroundColor: "{colors.dark.background}"
    textColor: "{colors.dark.on-surface}"
  page-dark-muted:
    backgroundColor: "{colors.dark.background}"
    textColor: "{colors.dark.on-surface-muted}"
  card-dark:
    backgroundColor: "{colors.dark.surface}"
    textColor: "{colors.dark.on-surface}"
  button-primary-dark:
    backgroundColor: "{colors.dark.primary}"
    textColor: "{colors.dark.on-primary}"
  button-primary-dark-hover:
    backgroundColor: "{colors.dark.primary-hover}"
    textColor: "{colors.dark.on-primary}"
  project-row-line-dark:
    backgroundColor: "{colors.dark.primary}"
    textColor: "{colors.dark.on-primary-muted}"
  divider-dark:
    backgroundColor: "{colors.dark.outline}"
    height: 1px
  control-border-dark:
    backgroundColor: "{colors.dark.outline-strong}"
    width: 1px
  focus-ring-dark:
    backgroundColor: "{colors.dark.focus}"
    width: 2px
  work-block-divider-dark:
    backgroundColor: "{colors.dark.on-primary-line}"
    height: 1px
---

# Ezequiel Rangel — DESIGN.md

Lee este archivo completo antes de crear o modificar cualquier interfaz de ezerangel.com. Los tokens del encabezado YAML son los valores normativos. La prosa explica cómo aplicarlos. Si algo no está aquí, usa la opción más sobria del sistema y pregunta.

Archivos que acompañan a este documento (rutas relativas a este archivo):

| Archivo | Qué es |
| --- | --- |
| `@design/tokens.css` | Los tokens como variables CSS (`:root` = claro, `[data-theme="dark"]` = oscuro). Es lo que el código consume. |
| `@design/tokens.json` | Los mismos tokens en el formato del design system original. |
| `@design/components.css` | Estilos de todos los componentes (clases `er-*`). |
| `@design/layout.css` | Contenedor, ritmo vertical, pie de página, skip link (clases `pg-*`). |
| `@design/components.html` | Marcado de referencia de cada componente, con interruptor claro/oscuro. Ábrelo en el navegador. |
| `design/fonts/` | Geist, Geist Mono e Instrument Serif (woff2, licencia SIL OFL 1.1). |
| `design/logos/` | Logotipo, símbolo e íconos de app en SVG, con texto trazado. |

Validación: `npx @google/design.md lint DESIGN.md` da 0 errores. Su única advertencia es que el bloque `motion` aún no lo reconoce la versión publicada del linter (0.4.0), aunque sí está en la especificación actual.

Fuentes originales (privadas, en claude.ai): Brandbook https://claude.ai/artifact/QpYNVikXfRkq3TzyQs8aU5 · Design System https://claude.ai/artifact/DFBufMqFBpfXF4zTT4qjp2 · Copy del Homepage v1 https://claude.ai/artifact/XKDPkpqJM8sR5CfbRKxG8b.

## Overview

ezerangel.com es el sitio de Ezequiel Rangel, product engineer en Mazatlán, México. Su idea central es "construyo primeras versiones": ideas de producto convertidas en prototipos que funcionan y que la gente real usa. El sitio muestra lo que construye y tiene un solo objetivo: que le escribas.

- **Audiencia:** reclutadores y hiring managers (Product Engineer, Forward Deployed Engineer), fundadores con una idea de producto y developers que leen sobre IA aplicada.
- **Personalidad:** ingeniero de producto, creador de soluciones, directo, con opiniones fuertes, sobrio. Nunca un apagador de fuegos, nunca corporativo, nunca folclórico.
- **Sensación:** editorial y técnica a la vez. Mucho aire, una idea por pantalla, tipografía grande con intención, un solo color con propósito.
- **Principios:** mostrar en lugar de prometer; una idea por pantalla; opinión primero y razón después; el trabajo ocupa más espacio que la biografía; nada de ruido (badges, contadores, emojis, logos de tecnologías, animación decorativa).

La firma de la marca es el **cursor de bloque**: un cuadrado sólido en el color primario, del alto de la x, pegado al final del logotipo y del tagline. Se lee como el cursor de un editor (siempre construyendo) y como un punto final (una postura tomada).

## Colors

Papel cálido, tinta casi negra y un solo acento: el **Azul Plano**, el azul de los planos de ingeniería, el dibujo que existe antes de construir. El rojo y el naranja se evitaron a propósito porque remiten a fuego y urgencia.

- **Primary — Azul Plano (#2E2BE8 / oscuro #8C8CFF):** enlaces, cursor de bloque, botón primario, anillo de foco y el bloque de trabajo a ancho completo. Ocupa cerca del 3% de la pantalla, salvo en ese bloque.
- **Background — Papel (#F3F1EC / #0F0F11):** fondo de página. Junto con Surface, cubre cerca del 85% de la pantalla.
- **Surface (#FBFAF7 / #18181B):** tarjetas, campos, código y hover de filas. Se separa del fondo por tono o por una línea, nunca por sombra.
- **On-surface — Tinta (#141414 / #ECEAE4):** texto principal y logotipo.
- **On-surface-muted (#5C5850 / #A19D94):** texto secundario, metadatos, etiquetas.
- **Outline (#D6D1C6 / #2C2C31):** divisores decorativos de 1 px. Nunca define el borde de un control.
- **Outline-strong (#8C877C / #6B6862):** bordes de controles: botón secundario, chips, campos.
- **On-primary, on-primary-muted y on-primary-line:** todo lo que va dentro del bloque de trabajo. En oscuro el texto sobre el acento es oscuro (#0F0F11), nunca blanco.

Contraste verificado con la fórmula de WCAG 2.2:

| Par | Claro | Oscuro |
| --- | --- | --- |
| On-surface sobre Background | 16.3:1 | 15.9:1 |
| On-surface-muted sobre Background | 6.3:1 | 7.1:1 |
| Primary como texto sobre Background | 7.1:1 | 6.7:1 |
| On-primary sobre Primary | 8.0:1 | 6.7:1 |
| On-primary-muted sobre Primary | 6.1:1 | 5.4:1 |
| Outline-strong sobre Background (controles) | 3.2:1 | 3.5:1 |

**Nombres en el código.** Los componentes leen variables CSS de `@design/tokens.css`, que conservan los nombres del design system original. Esta es la equivalencia:

| Token aquí | Variable CSS |
| --- | --- |
| `primary` (`dark.primary`) | `--accent` |
| `primary-hover` | `--accent-hover` |
| `on-primary` | `--on-accent` |
| `on-primary-muted` | `--on-accent-muted` |
| `on-primary-line` | `--on-accent-line` |
| `background` | `--bg` |
| `surface` | `--surface` |
| `on-surface` | `--ink` |
| `on-surface-muted` | `--muted` |
| `outline` | `--line` |
| `outline-strong` | `--line-strong` |
| `focus` | `--focus` |

No generes variables con `design.md export --format css-vars` para el sitio: produce otros nombres (`--color-primary`). El código usa `@design/tokens.css`.

El tema se cambia con `data-theme="light" | "dark"` en `<html>`. Los componentes usan siempre las variables, nunca hex sueltos; los tokens planos son el tema claro y el grupo `dark` el oscuro. Los componentes con sufijo `-dark` documentan los pares de color del tema oscuro; en código no son componentes aparte: el mismo componente cambia solo al cambiar `data-theme`.

## Typography

Tres familias, cada una con un trabajo. **Instrument Serif** para las ideas (display, h1, h2, opiniones). **Geist** para leer y operar (logotipo, cuerpo, UI, h3). **Geist Mono** para los datos (etiquetas, fechas, estados, idioma, código). El contraste entre serif editorial y sans técnica es la tensión de la marca: criterio de producto e ingeniería en la misma página.

- Los tamaños del YAML son de escritorio. En código van fluidos con `clamp()`:

| Token | Móvil → escritorio | `clamp()` |
| --- | --- | --- |
| `display` | 56 → 128 px | `clamp(3.5rem, 9vw, 8rem)` |
| `h1` | 44 → 88 px | `clamp(2.75rem, 6vw, 5.5rem)` |
| `h2` | 34 → 56 px | `clamp(2.125rem, 4vw, 3.5rem)` |
| `opinion` | 28 → 36 px | `clamp(1.75rem, 2.6vw, 2.25rem)` |
| `h3` | 20 → 24 px | `clamp(1.25rem, 2vw, 1.5rem)` |
| `lead` | 19 → 22 px | `clamp(1.1875rem, 1.6vw, 1.375rem)` |
| `body` | 17 → 18 px | — |

- La serif nunca baja de 34 px en titulares ni aparece en botones, UI o párrafos.
- Itálica serif: una sola palabra de énfasis por titular, como máximo ("I build *first* versions.").
- Mono: siempre en MAYÚSCULAS, salvo el código.
- Texto alineado a la izquierda; nada justificado ni centrado si pasa de dos líneas.
- Números tabulares (`font-variant-numeric: tabular-nums`) en fechas, años y cifras.
- Comillas tipográficas curvas en ambos idiomas.
- Carga las fuentes con `next/font/local` desde `design/fonts/` y expón `--font-serif`, `--font-sans` y `--font-mono`. Las tres cubren el español completo (á é í ó ú ñ ¿ ¡). **Ninguna tiene el glifo ■**, así que el cursor nunca se escribe como carácter.

## Layout

Retícula de 12 columnas, mucho aire y una etiqueta mono numerada al inicio de cada sección. Ritmo pausado: secciones grandes con un solo mensaje.

| Breakpoint | Ancho | Columnas | Medianil | Margen lateral |
| --- | --- | --- | --- | --- |
| Móvil | < 640 px | 4 | 16 px | 20 px |
| Tablet | 640–1023 px | 8 | 20 px | 32 px |
| Escritorio | ≥ 1024 px | 12 | 24 px (`gutter`) | 48 px (`page-margin`) |

- Contenedor máximo `container-max` (1360 px), centrado.
- Texto corrido hasta 68ch; entradillas hasta 40–46ch.
- Espaciado en base 4 px (`space-*`). Entre secciones: `space-32` en escritorio, `space-24` en tablet y `space-16` en móvil. Aire superior del hero: `space-32`.
- Cada sección abre con un Section label (línea de 1 px a todo el ancho + `■ 01  NOMBRE`). La numeración reinicia en cada página.
- El bloque de trabajo rompe el contenedor: fondo a ancho completo y contenido dentro del contenedor.
- Objetivos táctiles de al menos `hit-target` (44 px).
- Mobile-first. Por debajo de 720 px la navegación pasa a "Menu".

## Elevation & Depth

El diseño es plano. **No hay sombras en ningún elemento.** La jerarquía sale de:

1. **Tamaño y familia tipográfica:** la serif grande manda.
2. **Cambio de superficie:** `background` → `surface` para separar una tarjeta o marcar un hover.
3. **Líneas de 1 px:** `outline` para dividir, `outline-strong` para delimitar controles.
4. **Un solo bloque de color** (`primary`) por página, para el trabajo seleccionado.

Si sientes que algo necesita sombra, separa con superficie o con una línea.

## Shapes

El sistema es cuadrado y preciso.

- `rounded.none` (0 px): bloques, tarjetas, capturas y el cursor de bloque.
- `rounded.sm` (2 px): botones y campos.
- `rounded.full`: solo chips de estado.
- Bordes de 1 px. Anillo de foco de 2 px sólido con 2 px de separación.
- Íconos: no hay set. Las únicas marcas gráficas son el cursor y las flechas tipográficas → (interna) y ↗ (externa) de Geist. Si un día hace falta un ícono: trazo de 1.5 px, esquinas rectas, un color.
- Imágenes: capturas reales de producto sin marco de dispositivo, sobre `surface` con borde de 1 px, proporción 16:10. Diagramas con líneas de 1.5 px en `primary` sobre `background` y etiquetas en mono. Sin fotos de rostro, stock, 3D genérico ni imágenes generadas con IA que simulen pantallas.

## Motion & Micro-interaction

El movimiento existe solo para confirmar una acción o anunciar algo nuevo. Nada se anima en bucle.

| Token | Uso |
| --- | --- |
| `state-change` (120 ms) | Hover y cambios de color. |
| `micro` (200 ms) | La flecha que avanza 4 px en botones y filas; el grosor del subrayado de enlaces. |
| `surface-enter` (320 ms) | Entrada de secciones (los titulares suben 12 px, una sola vez por carga) y el menú móvil. |
| `cursor-blink` (500 ms) | El cursor del logo y del hero parpadea **dos veces** al cargar y se queda fijo. |

- Anima solo `transform`, `opacity` y color.
- Con `prefers-reduced-motion: reduce`: sin desplazamientos ni parpadeos, solo cambios de color.
- Prohibido: preloaders, scroll secuestrado, parallax, cursores personalizados, animaciones decorativas.

## Voice & Content Strategy

Primera persona singular, de tú a tú, frases cortas y una postura clara. Poco humor, cero adornos. Bilingüe por diseño: inglés en `/`, español en `/es`. Cada texto se escribe nativo en cada idioma, no traducido palabra por palabra.

- **Fuente del copy:** `messages/en.ts` y `messages/es.ts` (Homepage copy v1). No escribas textos nuevos: si falta uno, pídelo. Los textos de las vistas previas del design system original son ilustrativos; manda el copy v1.
- **Reglas:** "construyo", nunca "construimos". Tuteo en español, "you" directo en inglés. Menos de 20 palabras por frase y máximo 3 frases por párrafo. Opinión + razón.
- **Verbos:** construir, lanzar, probar, decidir (build, ship, test, decide). Nunca rescatar, arreglar, apagar ni salvar.
- **Prohibido:** emojis, signos de exclamación, "MVP", "AI-powered", "ninja", "rockstar", "apasionado", métricas o testimonios inventados.
- **Botones:** el verbo primero, en frase normal. CTA principal: "Tell me what you want to build" / "Cuéntame qué quieres construir". Secundarios: "All work →", "All writing →", "Copy" / "Copiar".
- **Mayúsculas:** frase normal en títulos y botones. MAYÚSCULAS solo en mono.
- **Nombres propios:** los productos no se traducen (Fiscalio, Relay, JobSnap). YouOut e ICUSA no se mencionan nunca.
- **Fechas:** EN "Dec 25, 2024"; ES "25 dic 2024". Tiempo de lectura: "6 min read" / "6 min de lectura". Estado de proyecto: "v0.1 · in validation" / "v0.1 · en validación".
- **Errores:** 404 "This page doesn't exist. This does:" / "Esta página no existe. Esto sí:" + enlaces útiles.
- **Placeholders:** los datos que faltan van entre corchetes (`[YEAR]`, `[STATUS]`) y se muestran tal cual. Nunca los rellenes con datos inventados.

## Components

Marcado exacto, clases y ARIA de cada uno en `@design/components.html`; estilos en `@design/components.css`. Reproduce la estructura como componentes React propios. Los comportamientos interactivos (menú móvil, selector de tema) se montan sobre el UI SDK de Vercel, envueltos en componentes propios y con la versión fijada.

- **Logo** (`@design/components.html#logo`): texto vivo "Ezequiel Rangel" en Geist 500, 18 px, tracking −2%, más el cursor. Para favicon y avatar se usa el símbolo E■ (`design/logos/app-icon-*.svg`). No abreviar el nombre, no cambiar la forma ni el color del cursor, no escribir el logo en serif.
- **Cursor** (`@design/components.html#cursor`): `<span aria-hidden="true">` dibujado con CSS. Lado 0.53 em en Geist y 0.5 em en la serif; separación 0.12 em; apoyado en la línea base. Sobre `primary` se vuelve `on-primary`.
- **Skip link** (`@design/components.html#skip-link`): primer elemento enfocable; visible solo con foco.
- **Button** (`@design/components.html#button`): `button-primary` una sola vez por vista y solo para la acción principal; `button-secondary` con borde de 1 px en `outline-strong` para todo lo demás. Altura 48 px. En hover, la flecha avanza 4 px.
- **Text link** (`@design/components.html#text-link`): color `primary`, subrayado de 1 px siempre visible (2 px en hover), separado 0.2 em del texto.
- **Section label** (`@design/components.html#section-label`): cuadro de 8 px en `primary` + número + nombre en mono. Es decorativo: el título real de la sección es el `h2` que sigue.
- **Status chip** (`@design/components.html#status-chip`): borde de 1 px en `outline-strong`, mono de 12 px, radio completo.
- **Site header** (`@design/components.html#site-header`): logo · Work, Writing, About, Contact · EN / ES · System/Light/Dark · Menu en móvil. La página activa lleva `aria-current="page"`.
- **Hero** (`@design/components.html#hero`): nombre + descriptor mono + tagline en `display` con itálica y cursor + entradilla + un solo `button-primary`. Una vez por sitio.
- **Work block + project row** (`@design/components.html#work-block`): campo `primary` a ancho completo y el único bloque de color de la página. Cada fila es un enlace completo: nombre (`h3`), una línea, año, chip y flecha. Hover en `primary-hover`. Todo lo de dentro usa `on-primary*`.
- **Process steps** (`@design/components.html#process-steps`): 4 → 2 → 1 columnas, con línea superior de 1 px en `on-surface` y número mono en `primary`.
- **Opinions** (`@design/components.html#opinions`): lista ordenada; texto en `opinion` (serif); número mono en `primary`; 2 → 1 columnas; divisor `outline`.
- **Article row** (`@design/components.html#article-row`): fecha mono · título `title-sm` · idiomas y tiempo de lectura. Toda la fila es el enlace.
- **Contact block** (`@design/components.html#contact-block`): cierra todas las páginas, con `id="contact"`. Correo como `mailto:` subrayado en `primary`; el botón Copy anuncia el copiado con `aria-live="polite"`.
- **Site footer** (`@design/components.html#site-footer`): símbolo E■ · "Built in Mazatlán, Mexico." · navegación · redes · Privacy · RSS · ©.
- **Card** (genérica): `surface` sobre `background`, borde de 1 px en `outline`, radio 0 y sin sombra.

Estados obligatorios en todo componente interactivo: reposo, hover, foco visible (anillo `focus` de 2 px con 2 px de separación; sobre `primary`, en `on-primary`), activo y deshabilitado (opacidad 0.4, sin cambio de forma).

## Do's and Don'ts

**Do**
- Usa `primary` solo para la acción principal, enlaces, el cursor y el bloque de trabajo.
- Usa variables CSS de `@design/tokens.css` para todo color, espacio, radio y duración.
- Comprueba 4.5:1 de contraste en texto (3:1 en texto de 24 px o más y en bordes de controles) en **ambos** temas.
- Deja que la tipografía cargue la jerarquía: una serif grande por sección y nada que compita con ella.
- Deja aire: ante la duda, más espacio, no más elementos.
- Usa HTML semántico (un `h1` por página, `<button>` y `<a href>` reales, `<ul>`/`<ol>` para listas) y que todo funcione con teclado.
- Muestra los placeholders entre corchetes tal como están.

**Don't**
- No agregues colores, degradados ni sombras, y no uses glassmorphism.
- No uses tarjetas con borde de color a la izquierda, píldoras decorativas ni badges de "New".
- No pongas emojis, íconos decorativos ni logos de tecnologías en cuadrícula.
- No uses la serif en UI ni por debajo de 34 px en titulares.
- No escribas el cursor como carácter ■.
- No uses radios grandes ni tarjetas redondeadas: el sistema es cuadrado.
- No pongas más de un `button-primary` por vista.
- No inventes textos, métricas, años, clientes ni testimonios.
- No animes en bucle ni ignores `prefers-reduced-motion`.
- No redirijas automáticamente por idioma del navegador.
