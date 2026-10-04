# Reforma Digital · Sistema de diseño

Versión 1.0 · 2026‑09‑27

Este documento es la referencia visual de **todo** lo que Reforma Digital pinta: los paneles, el popup, la capa de estilo que viste la web oficial y la web pública (`apps/web`: landing, chat y páginas informativas). Ningún portal (`sites/<id>`) define colores, tamaños ni componentes propios: usan los de aquí. La web pública añade un sistema editorial propio, descrito en §8. Las demostraciones de la landing se pintan con las mismas clases que la extensión, así que lo que enseña la portada es lo que se instala.

| Qué                                    | Dónde vive en el código                                                                                                                                                                                                                                                       |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tokens (color, forma, tipografía)      | [`packages/design/src/tokens.css`](packages/design/src/tokens.css)                                                                                                                                                                                                            |
| Componentes (botones, campos, avisos…) | [`packages/design/tailwind-preset.js`](packages/design/tailwind-preset.js)                                                                                                                                                                                                    |
| Componentes React                      | [`packages/design/src/ui/components.tsx`](packages/design/src/ui/components.tsx) · campos conectados en [`packages/react`](packages/react/src/index.tsx)                                                                                                                      |
| Temas para webs oficiales              | [`themes/morfos.css`](packages/design/themes/morfos.css) (framework Morfos de la AGE) · [`themes/aeat.css`](packages/design/themes/aeat.css) (Agencia Tributaria) · [`themes/sede-interior.css`](packages/design/themes/sede-interior.css) (Sede del Ministerio del Interior) |

Los componentes se definen **una sola vez** en el preset. Los paneles los usan como clases (`bg-btn bg-btn-primary`) y los temas los aplican a los elementos oficiales con `@apply`. Así, un botón oficial y un botón del panel son idénticos por construcción.

---

## 1. Principios

1. **La web oficial manda.** Toda la información sale de la página oficial y todas las acciones ejecutan controles oficiales. El diseño lo deja claro: etiqueta «Interfaz comunitaria · sitio oficial», dominio visible y bloques de «Información oficial».
2. **Una sola voz visual.** Mientras la mejora está activa, toda la página (panel, contenido oficial, cabecera, pie) usa los mismos tokens y componentes. No hay «islas» con estilos distintos.
3. **Claridad antes que decoración.** Una acción principal por pantalla, jerarquía tipográfica corta, mucho aire y nada de ornamentos.
4. **Nada importante se oculta.** Los avisos legales, errores, condiciones y requisitos se re‑maquetan, pero nunca se esconden, se acortan ni se reordenan.
5. **Accesible por defecto.** Todo cumple WCAG 2.2 AA: contraste, foco visible, objetivos de 44 px y controles nativos.
6. **Privado por diseño.** Sin fuentes, imágenes ni scripts remotos. Todo va dentro del paquete.

## 2. Tokens

### 2.1 Color

Los valores están en `packages/design/src/tokens.css` como canales RGB (`--bg-brand-600: 20 20 20`). El contraste está medido sobre blanco salvo que se indique otra cosa.

| Token              | Hex                               | Uso                                                                      | Contraste             |
| ------------------ | --------------------------------- | ------------------------------------------------------------------------ | --------------------- |
| `ink`              | `#141414`                         | Texto principal, títulos                                                 | 18.4:1 sobre blanco   |
| `ink-muted`        | `#555555`                         | Texto secundario, ayudas                                                 | 7.5:1 sobre blanco    |
| `ink-subtle`       | `#696969`                         | Metadatos, eyebrow                                                       | 5.5:1 sobre blanco    |
| `canvas`           | `#F7F7F8`                         | Fondo de página                                                          | —                     |
| `surface`          | `#FFFFFF`                         | Tarjetas, campos                                                         | —                     |
| `surface-muted`    | `#F4F4F5`                         | Zonas secundarias, avisos neutros                                        | —                     |
| `line`             | `#EBEBEB`                         | Bordes de tarjeta, separadores                                           | decorativo            |
| `line-strong`      | `#DCDCDC`                         | Borde de opciones seleccionables                                         | decorativo            |
| `line-control`     | `#808080`                         | Borde de campos y botón secundario                                       | 3.9:1 sobre blanco    |
| `brand-600`        | `#141414`                         | **Acción principal**, enlaces, foco                                      | 18.4:1 sobre blanco   |
| `brand-700`        | `#2D2D2D`                         | Hover de acción/enlace                                                   | 13.8:1 sobre blanco   |
| `brand-50/100/200` | `#F7F7F7` `#EEEEEE` `#CDCDCD`     | Badge, selección y paso actual (`100`), anillo de foco de campos (`200`) | —                     |
| `brand-900`        | `#141414`                         | Texto sobre `brand-50`                                                   | 17.2:1 sobre brand-50 |
| `info-*`           | `#EFF6FF` · `#BFDBFE` · `#1E3A8A` | Aviso informativo (fondo · borde · texto)                                | 9.5:1                 |
| `warning-*`        | `#FFFBEB` · `#FCD34D` · `#78350F` | «Lee esto antes de continuar»                                            | 8.8:1                 |
| `danger-*`         | `#FEF2F2` · `#FCA5A5` · `#991B1B` | Errores y énfasis rojo de la web oficial                                 | 7.6:1                 |
| `success-*`        | `#ECFDF3` · `#A6F4C5` · `#05603A` | Confirmaciones                                                           | 7.3:1                 |

Reglas:

- Solo hay **un color de acción**: `brand-600`. No hay botones rojos, verdes ni del color corporativo de la web oficial.
- El color nunca es el único indicador: la selección lleva borde, fondo **y** peso de fuente; el estado del paso lleva número o ✓ **y** texto oculto para lectores de pantalla.
- Modo oscuro: **no** en la v1. El contenido oficial (tablas, imágenes, estilos inline) no se puede invertir con garantías.

### 2.2 Tipografía

Fuente: Helvetica Neue, Helvetica y Arial como alternativa. No se cargan fuentes remotas (§1.6).

| Clase                  | Tamaño / interlineado       | Peso | Uso                                                 |
| ---------------------- | --------------------------- | ---- | --------------------------------------------------- |
| `bg-h1`                | 28/1.2 (24 en móvil)        | 500  | Título del panel, uno por página                    |
| `bg-h2`                | 20/1.3                      | 650  | Secciones, títulos oficiales re‑maquetados          |
| `bg-h3`                | 17/1.4                      | 600  | Subsecciones, grupos de opciones                    |
| `bg-lead`              | 17/1.6                      | 400  | Entradilla bajo el título                           |
| `bg-text`              | 16/1.6                      | 400  | Cuerpo. **Mínimo absoluto para lectura**            |
| `bg-small` / `bg-hint` | 14/1.5                      | 400  | Ayudas y metadatos. Nunca para información esencial |
| `bg-eyebrow`           | 12/1.4, mayúsculas, +0.06em | 600  | Rótulos («Información oficial», «Paso 2 de 5»)      |

- Las líneas de lectura no pasan de unos 75 caracteres (`max-width: 70ch` en el cuerpo).
- Los textos oficiales en MAYÚSCULAS se muestran tal cual: no se reescriben.

### 2.3 Espaciado, forma y elevación

- Retícula de **4 px**. Escala habitual: 4, 8, 12, 16, 20, 24, 32, 48.
- Entre bloques de un panel: 20 px. Relleno de tarjeta: 16 px en móvil y 24 px desde 640 px.
- `--bg-radius-control`: **16 px** (campos, opciones, avisos, pasos). `--bg-radius-card`: **24 px** (tarjetas y panel). Píldora (`999px`) para botones, buscador y badge.
- Tarjetas **sin borde ni sombra**: una superficie blanca sobre el `canvas` gris. La línea (`line`) solo separa elementos dentro de una tarjeta. `shadow-raised` queda para el aviso flotante de fallback; nada más flota.
- Ancho máximo del contenido: **1120 px** (`--bg-content-max`).
- Puntos de corte: `sm` 640 px (una a varias columnas) y `lg` 1024 px (aparece la barra lateral oficial). Todo se diseña primero a **375 px**.

### 2.4 Movimiento

- Solo transiciones de color de 150 ms en hover. Sin animaciones de entrada.
- `prefers-reduced-motion: reduce` desactiva todas las transiciones y el desplazamiento suave.

## 3. Componentes

Los nombres de clase son los del preset. En React se usan los componentes que exporta `@reforma-digital/design`.

| Componente               | Clases                                                                             | React                                   | Reglas                                                                                                                                                                                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Barra superior**       | `bg-badge` + `bg-btn-secondary`                                                    | `Shell` (runtime) + `CommunityBadge`    | La pinta el runtime en toda página mejorada: «Interfaz comunitaria · sitio oficial», el dominio actual y el botón «Ver original». Ningún portal la repite.                                                                                                         |
| **Panel**                | `bg-card`                                                                          | `Panel`                                 | Uno por página, justo después del título oficial. Contiene: `bg-h1` → `bg-lead` → progreso → contenido.                                                                                                                                                            |
| **Campo conectado**      | `bg-bound` + `bg-label` + `bg-field` + `bg-hint`                                   | `BoundField` (`@reforma-digital/react`) | Sustituye un control oficial en su sitio (slot) y lo sincroniza mediante `DomBridge`.                                                                                                                                                                              |
| **Progreso**             | `bg-step` (+`bg-step-current`, `bg-step-done`, `bg-step-todo`) + `bg-step-num`     | `ProgressSteps`                         | Fichas sin borde con `aria-current="step"` desde 640 px: el paso actual lleva fondo `brand-100`, número en negro y peso 600; los hechos, ✓. En móvil, una barra segmentada más «Paso N de M: nombre». Los pasos fuera del alcance llevan «solo en la web oficial». |
| **Botón principal**      | `bg-btn bg-btn-primary` (+`bg-btn-lg`)                                             | `PrimaryAction`                         | Uno por pantalla. Verbo más destino («Continuar con Madrid»). Deshabilitado solo con una ayuda que diga por qué. Si la web oficial ofrece opciones equivalentes (p. ej. con o sin Cl@ve), **ninguna** se destaca: todas van como secundarias.                      |
| **Botón secundario**     | `bg-btn bg-btn-secondary`                                                          | `SecondaryAction`                       | «Volver» y acciones alternativas.                                                                                                                                                                                                                                  |
| **Enlace**               | `bg-link`                                                                          | `LinkButton`, `ExternalLink`            | Siempre subrayado. Los externos llevan ↗ y «(se abre en una pestaña nueva)» para lectores de pantalla.                                                                                                                                                             |
| **Campo**                | `bg-label` + `bg-field` + `bg-hint`                                                | —                                       | Etiqueta visible siempre; el placeholder solo pone ejemplos.                                                                                                                                                                                                       |
| **Buscador**             | `bg-field bg-field-search`                                                         | `SearchField`                           | El mismo campo en píldora. Busca sin tildes ni símbolos («clave» encuentra «Cl@ve») y dice cuántos resultados hay.                                                                                                                                                 |
| **Opción seleccionable** | `bg-choice` (+`bg-choice-checked`)                                                 | `Choice`                                | `radio` nativo dentro de `label`. Seleccionada: borde `brand-600`, fondo `brand-100` y peso 600. Se usa en listas largas con buscador; con menos de 7 opciones, radios sin buscador.                                                                               |
| **Aviso**                | `bg-callout bg-callout-{info,warning,danger,success,neutral}` + `bg-callout-title` | `Callout`                               | `warning` = «lee esto antes de seguir»; `danger` = errores (con `role="alert"`); `neutral` = texto legal.                                                                                                                                                          |
| **Bloque oficial**       | `bg-eyebrow`                                                                       | `OfficialDivider`                       | Separa el panel del contenido oficial: «Información oficial de esta página».                                                                                                                                                                                       |
| **Aviso de fallback**    | `bg-card shadow-raised`                                                            | `FallbackNotice`                        | Esquina inferior izquierda, se puede cerrar y no bloquea nada.                                                                                                                                                                                                     |

## 4. Cómo se viste la web oficial

Mientras la interfaz está activa, el runtime (`packages/runtime`) añade `data-bg-site="<portal>"` y `data-bg-page="<pantalla>"` al `<html>` e inyecta los `pageStyles` de la pantalla. Al pulsar «Ver original», desactivar el portal o si falla un control oficial, **se quita todo** y la página vuelve a ser la original.

### 4.1 Qué se re‑estiliza

| Zona oficial                                                                 | Se muestra como                                                                                        |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Fondo, tipografía y color del texto                                          | `canvas`, `bg-text`, `ink`                                                                             |
| Cabecera (logotipos oficiales, título de la sede y menú)                     | Barra blanca con borde; los **logotipos oficiales se mantienen** intactos y el menú pasa a texto `ink` |
| Migas de pan y rótulos                                                       | `bg-small` / `bg-eyebrow`                                                                              |
| Título oficial de la página («CITA PREVIA EXTRANJERÍA»)                      | `bg-eyebrow`: queda como rótulo sobre el panel                                                         |
| Contenedor principal y barra lateral                                         | `bg-card`                                                                                              |
| Títulos oficiales (`h2`, `h3`, `.mf-paragraph-header`)                       | `bg-h2` / `bg-h3`                                                                                      |
| Párrafos y listas                                                            | `bg-text`, `max-width: 70ch`                                                                           |
| Enlaces                                                                      | `bg-link`                                                                                              |
| Notas (`.mf-note`) y listas de avisos                                        | `bg-callout-warning` o `bg-callout-neutral`                                                            |
| Aviso de protección de datos (`fieldset` con estilo inline)                  | `bg-callout-neutral`                                                                                   |
| Texto en rojo inline (`style="color: red"`)                                  | `danger-fg`: **se mantiene el énfasis**                                                                |
| Errores oficiales (`.error_list`, `.mf-msg__error`)                          | `danger-fg`                                                                                            |
| Botones oficiales (`.mf-button`, `input[type=submit]`, `input[type=button]`) | `bg-btn` primario o secundario                                                                         |
| Campos oficiales (`select`, `input`)                                         | `bg-field`                                                                                             |
| Opciones con/sin Cl@ve (`.mf-button__primary/secondary` en `acInfo`)         | `bg-card` interactiva                                                                                  |
| Barra de cookies                                                             | Tarjeta fija abajo con botones `bg-btn`. **No se oculta ni se acepta.**                                |
| Pie                                                                          | `bg-small` sobre `surface`                                                                             |

### 4.2 Controles oficiales duplicados

Si un panel ofrece un control sincronizado con uno oficial (el desplegable de provincias, el de oficinas, el de trámites o el botón «Aceptar»), el tema puede ocultar **solo ese control oficial** mientras el panel está montado. Nunca se ocultan:

- mensajes de error ni sus contenedores,
- avisos, notas, textos legales ni requisitos,
- controles oficiales que el panel no replica (p. ej. `#divSubTramites`),
- nada en pantallas que el portal no tenga registradas.

«Ver original» (barra comunitaria o popup) y «Desactivar en este portal» los recuperan al instante.

### 4.3 Lo que nunca hace un tema

- `display: none`, `visibility: hidden` u `opacity: 0` sobre contenido informativo (solo se permite en controles duplicados, §4.2).
- Truncar texto (`line-clamp`, `text-overflow`), cambiar el orden del contenido oficial o bajar de 14 px.
- Cambiar o tapar los logotipos institucionales, o imitar la identidad de la Administración en elementos propios.
- Pintar botones propios con apariencia de botón oficial fuera del panel.

## 5. Contenido y tono

- **Tú**, frases cortas y verbos en imperativo amable: «Elige la provincia», «Lee los avisos oficiales».
- Atribuye siempre: «según la web oficial», «la web oficial indica».
- No prometas nada: nunca digas «hay citas», «es rápido» ni «tendrás cita». Tampoco inventes requisitos, plazos ni documentos.
- Nombra las cosas como la web oficial («Presentación sin Cl@ve»), aunque suenen raro, para que la persona las reconozca.
- Los números de paso, en cifras: «Paso 2 de 5».

## 6. Accesibilidad (lista de comprobación)

- [ ] Contraste AA en texto (4.5:1) y bordes de controles (3:1).
- [ ] Foco visible: contorno de 3 px `brand-600` con separación de 2 px en botones y enlaces, y anillo de 3 px `brand-200` más borde `brand-600` en campos.
- [ ] Objetivos táctiles de al menos 44 × 44 px.
- [ ] Controles nativos (`button`, `select`, `input[type=radio]`, `fieldset`/`legend`).
- [ ] Un solo `h1` visual por panel; en el HTML el panel usa `h2`, porque la página oficial ya tiene su `h1`.
- [ ] Cambios dinámicos anunciados con `aria-live` o `role="alert"` (errores oficiales).
- [ ] Sin scroll horizontal a 375 px.
- [ ] Se respeta `prefers-reduced-motion`.

## 7. Cómo añadir o cambiar algo

1. ¿Existe ya un token o componente? Úsalo.
2. Si no existe, añádelo **aquí primero** (tabla correspondiente), después en `tokens.css` o en el preset, y por último úsalo.
3. Revisa el resultado con `npm run site:preview -- <portal>`, que reproduce una visita grabada con `site:record` sin conexión y guarda capturas a 1280 y 390 px en `.cache/preview/<portal>/`. Para los campos conectados, usa el laboratorio (`npm run dev`).
4. Un PR que cambie el diseño debe incluir capturas y, si toca tokens de color, el contraste medido.

## 8. Web pública

La web pública (`apps/web`) parte de los tokens de `packages/design`, pero tiene su propio lenguaje editorial. Está pensada para gente que no sabe nada de tecnología: primero se pregunta, después se enseña y al final se explica. La extensión no cambia: sigue con §1–§7.

| Página                 | Para qué                                                                       |
| ---------------------- | ------------------------------------------------------------------------------ |
| `/`                    | Preguntar. Debajo: qué es, la demo, los trámites y cómo conseguir la extensión |
| `/propuesta`           | La explicación a fondo (formato Documento)                                     |
| `/extension`           | El producto: qué hace, demo, cómo instalarla, dónde funciona y qué no hace     |
| `/privacy`, `/sources` | Información legal y fuentes                                                    |

- **Color.** Fondo `--doc-bg` (#F7F6F5), bandas `--doc-band` (#EFEEEC), superficies blancas con un anillo de 1 px en lugar de borde o sombra. El rojo `--doc-red` (#DF1717) solo marca la sección activa del menú, el borde de las citas destacadas y el sello al pasar el ratón. Las acciones siguen en negro (`brand-600`).
- **Forma.** Todas las esquinas son rectas, también en botones, campos, avisos, diálogos y el interruptor de la demo.
- **Tipografía.** FFF Tool Serif Text (`--doc-serif`) para titulares, texto, menús y botones; Georgia de respaldo. Grotesca (`--bg-font`: FFF Tool Sans, con Inter de respaldo) solo para textos de 14 px o menos y para la demo, que imita la extensión. Mono (`--doc-mono`: Ufficio Mono) para números de sección, pies de figura y el pie. Las fuentes FFF y Ufficio solo se usan si están instaladas: no se publican archivos hasta comprar las licencias. Tamaños: pregunta de portada hasta 56 px, h1 de páginas 44 px, h2 28 px, texto 19 px (17 en móvil), todo en peso 400.
- **Iconos.** Pixelarticons (MIT), copiados solo los usados en `apps/web/components/pixel-icon.tsx`, pintados a 24 px (48 en los sellos). Los enlaces de texto usan «↗». `DemoTransform` y `Annotated` conservan `lucide-react` porque recrean la extensión.
- **Marca.** La R de 3 × 4 casillas con la esquina doblada (`LogoMark` en `apps/web/landing/Logo.tsx`). Mismo dibujo en el favicon.
- **Botones.** Rectangulares, 40–44 px de alto, con texto siempre visible: relleno negro para la acción principal y contorno negro para la secundaria.
- **Texto.** Tú, frases cortas y titulares en forma de pregunta o respuesta. Sin jerga en la portada ni en `/extension`: no se dice «IA», «interfaz», «adaptador», «repositorio» ni «pre-alpha»; se dice «la web oficial» y «un complemento gratuito para Google Chrome». Se enseña antes de explicar.

### 8.1 Portada

- **Primera pantalla.** Calma, sin menú lateral ni retícula: barra superior mínima (marca · La extensión · La propuesta), la R pequeña, la pregunta «¿En qué te puedo ayudar hoy?» como `h1`, el campo (nativo, 16 px o más, botón «Preguntar» activo desde 4 caracteres), tres sugerencias y una línea de microtexto. Al preguntar se abre la conversación en la misma página, sin cambiar la URL; el botón Atrás vuelve a la portada y recargar no reenvía la pregunta.
- **Al bajar.** «Qué es» (dos frases y tres pasos), «Mira la diferencia» (`DemoTransform` con el interruptor Original/Mejorada), los trámites como sellos, cómo conseguir la extensión y un avance de la propuesta. Ids: `#preguntar`, `#que-es`, `#demo`, `#tramites`, `#extension`.
- **Barra fija.** Solo en la portada: aparece cuando la pregunta sale de la vista y abre la misma conversación.
- **Sellos.** Marco gris perforado, número en serif, pictograma de 48 px y nombre en vertical. Al pulsarlo se abre el chat con la pregunta escrita. El matasellos marca los trámites con web oficial adaptada en `sites/`. El nombre accesible del botón es la pregunta.
- **Movimiento.** Solo la aparición de la barra fija y el gesto de los sellos al pasar el ratón. Ninguna animación al hacer scroll. Todo se desactiva con `prefers-reduced-motion`.

### 8.2 Páginas Documento (`/propuesta`, `/extension`)

- **Retícula.** Cinco columnas fijas, centradas en `--doc-width` (1288 px): margen 64 · navegación 262 · número 88 · lectura 700 · medianil 174 (`--doc-cols`). Líneas verticales (`.doc-guides`) a 1 px con `--doc-line`; desaparecen por debajo de 1100 px.
- **Menú lateral** (`DocNav`): las páginas del sitio arriba, con la actual marcada, y debajo las secciones de esa página. Una barra roja de 2 px marca la sección visible. Cada página define sus secciones en `apps/web/landing/site.ts`.
- **Secciones.** `section.doc-sec` con su número en el margen (`.doc-n`, mono 11 px). La numeración empieza en 01 en cada página. Figuras con pie en mono «Fig. n.»; las capturas de webs oficiales no se recolorean y van dentro del marco de navegador.
- **Sedes adaptadas.** Tabla con datos copiados de `sites/<id>/site.config.json`. No se muestran métricas que no estén medidas.

### 8.3 Guía de instalación

- Mientras la extensión no esté en la Chrome Web Store, nunca se dice «en un clic». La guía de `/extension#instalar` da los pasos reales (descargar, `chrome://extensions`, «Modo de desarrollador», «Cargar descomprimida») con las etiquetas de Chrome en negrita, el tiempo aproximado y la versión mínima de Chrome.
- Las sedes que se anuncian junto a la descarga coinciden con las que incluye la versión descargable.

### 8.4 Conversación

- En escritorio, la cabecera del chat pasa a la columna de navegación: marca, «Nueva conversación» (botón de contorno) y enlaces. Por debajo de 1100 px vuelve a ser una barra superior con «Menú».
- La conversación ocupa la columna de lectura. La pregunta propia va en una superficie blanca a la derecha y la respuesta en serif, con las citas como enlaces y el fragmento en una superficie neutra. Los errores usan los tokens `danger`.
- El compositor queda fijo abajo, alineado con la columna, con «Adjuntar PDF» y «Preguntar» visibles.
- La respuesta aparece según llega, sin animaciones de entrada. «Pensando» conserva un brillo neutro mientras hay trabajo pendiente y queda estático con `prefers-reduced-motion`.
- Las demostraciones no solicitan citas ni envían datos.
