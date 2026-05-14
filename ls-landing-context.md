# ls-landing — Contexto Técnico del Proyecto

## Repositorio y deploy
- **Repo:** lugicsystems/ls-landing (GitHub)
- **Hosting:** Cloudflare Pages — deploy automático desde `main`
- **Dominio producción:** www.lugicsystems.com.ar
- **Dominio técnico:** ls-landing.pages.dev
- **Ruta local:** `C:\LUGIC SYSTEMS\WEB\ls-landing`
- **Build command:** `npm run build` → output `dist`

## Stack
- **Astro** 6.1.9
- **Tailwind CSS** 4.2.4 via `@tailwindcss/vite` (NO usar `@astrojs/tailwind` — deprecado para Astro 6)
- **TypeScript** strict
- **Node** 24.15 / **npm** 11.12

## Tokens de diseño
Definidos en `src/styles/global.css` con directiva `@theme` (Tailwind v4):

```css
@import "tailwindcss";

@theme {
  --color-brand-blue:    #2D6BE4;
  --color-brand-dark:    #0A0A0F;
  --color-brand-mid:     #111827;
  --color-brand-text:    #F9FAFB;
  --color-brand-muted:   #9CA3AF;
  --color-brand-border:  #1F2937;
  --font-family-sans: 'Inter', system-ui, sans-serif;
}
```

**Tipografía:** Inter (Google Fonts, cargada en `Layout.astro`)

## Estructura de archivos
```
src/
  components/
    Header.astro
    Hero.astro
    QuienesSomos.astro
    QueHacemos.astro
    Productos.astro
    Demo.astro
    Planes.astro
    Promociones.astro
    EnergiaSolar.astro
    Testimonios.astro
    Contacto.astro
    Footer.astro
    WhatsAppFloat.astro
  layouts/
    Layout.astro
  pages/
    index.astro
  styles/
    global.css

public/
  images/
    logo.png
    og-image.png          ← 1200×630, Open Graph
    sfc-legacy-box.png    ← caja 3D SFC Legacy (reemplazó carrusel de screenshots del v5)
    sfc/
      01-menu-principal.png ... 07-promociones.png  ← conservados pero no usados en prod
    equipos/
      tickeadora.png
      lector-codigos.png
      balanza.png
      impresora-etiquetas.png
      mini-pc.png
      mini-pc2.png
    promo-combo-pdv.png
    solar/
      paneles.jpg / inversor.jpg / bateria.jpg / tablero.jpg / monitoreo.jpg
    testimonios/
      luis-1.jpg / luis-2.jpg / luis-3.jpg
      hector-1.jpg / hector-2.jpg / hector-3.jpg
      luciana-1.jpg / luciana-2.jpg / luciana-3.jpg
      martin-1.jpg / martin-2.jpg / martin-3.jpg
  favicon.ico
  favicon.svg
  apple-touch-icon.png
  robots.txt
```

## Layout base (Layout.astro)
- Importa `global.css` via `<style is:global>`
- Carga Inter desde Google Fonts
- `<body class="bg-brand-dark text-brand-text antialiased">`
- Props: `title`, `description?`, `ogImage?`, `canonicalURL?`
- SEO completo en `<head>`: meta description, robots, author, canonical, Open Graph (`og:locale: es_AR`), Twitter Card, favicon, apple-touch-icon
- OG image absoluta: `https://www.lugicsystems.com.ar/images/og-image.png`
- Schema.org LocalBusiness JSON-LD antes del `</head>` (tipo: `LocalBusiness` + `ProfessionalService`)
- Cloudflare Web Analytics beacon antes del `</body>` (token: `0ffe288bffbd4017877134a394376b71`)

## Secciones completadas

### Header
- Fixed top, `z-50`, blur backdrop
- Logo (`/images/logo.png`, `h-8`)
- Nav desktop: links con clase `.nav-link` — hover animado (subrayado azul `#2D6BE4` que crece desde el centro, `font-weight: 500`)
- Nav mobile: clase `.nav-link-mobile` — fondo azul sutil `rgba(45,107,228,0.1)` al tocar
- Hamburger menu mobile con toggle JS
- CTA "Contactanos" → `#contacto` (botón azul, sin efecto extra)
- Links: Quiénes somos, Qué hacemos, Productos, Demo, Planes, Promociones, Energía Solar

### Hero
- `min-h-[85vh]`, centrado, `overflow-hidden`
- Glow radial azul de fondo: `radial-gradient(ellipse 70% 50% at center, rgba(45,107,228,0.50) 0%, transparent 100%)`, div `w-[2000px] h-[800px]`
- Logo grande (`w-96 sm:w-[500px] md:w-[560px]`), `loading="eager"`
- H1: "Software y Tecnología para Negocios Inteligentes"
- CTAs: "Contactanos" (azul) + "Conocé más" (outline)
- Scroll indicator animado al fondo (flecha bounce + texto "SCROLL")

### Quiénes somos (`bg-brand-mid`)
- Grid 2 col: texto izquierda + stats cards derecha
- 5 stat cards: 15+ años, 100% desarrollo propio, #1 soporte post-venta, ARG cobertura, 5 áreas
- Copy de diferenciación: "Nos diferenciamos por el soporte post-venta. Atención personalizada, respuesta ágil y capacidad real de resolver — algo genuinamente difícil de encontrar en el mercado de software para comercios. Nuestros clientes no nos eligen solo por el producto: nos recomiendan porque saben que después de la venta, seguimos estando."

### Qué hacemos (`bg-brand-dark`)
- Grid 3 col (mobile: 1, sm: 2, lg: 3) — 6 cards con íconos SVG inline
- 6 áreas: Software de Gestión / Equipamiento Comercial / Redes de Datos / Cámaras de Seguridad / Energía Solar / CTA "¿Tu rubro no está?"
- Hover: border cambia a `brand-blue`, ícono scale

### Productos (`bg-brand-mid`)
- Grid 2 col: features+rubros+CTAs izquierda / imagen caja derecha
- Features: 16 items con checkmarks SVG
- Rubros: badges pill
- Imagen derecha: `sfc-legacy-box.png` (reemplazó carrusel de 7 screenshots del v5)
- CTAs: "Ver demo en video" + "Solicitar información"
- Badge Windows debajo de los CTAs: logo Windows SVG + "Funciona sobre Windows 10 y 11"
- **Bloque equipamiento** (debajo, separado por border-t):
  - Título: "Funciona con tu equipamiento"
  - Grid 5 col (2 mobile, 3 sm, 5 lg): Tickeadora térmica / Lector de código de barras / Balanzas digitales / Impresora de etiquetas / Mini PC
  - Cada card: imagen PNG transparente + nombre + descripción + badge "Compatible"
  - Mini PC: mini carrusel con 2 fotos (`mini-pc.png` + `mini-pc2.png`) y dots navegables
  - Imágenes en `public/images/equipos/`

### Demo (`bg-brand-dark`)
- **23 videos en total**, todos con URLs reales de YouTube
- Estructura:
  1. **Intro** ("Antes de empezar") — lite embed destacado
  2. **Demo general** (~3 min) — lite embed destacado
  3. **19 demos específicas** en 5 categorías con cards de thumbnail
  4. **Cierre** ("¿Qué sigue?") — lite embed destacado
  5. CTA "Quiero una demo personalizada" → `#contacto`
- Objeto `VIDEOS` centralizado en el frontmatter — para actualizar URLs, solo tocar ese bloque
- Helper `toEmbed()` convierte youtu.be → embed URL
- Helper `toThumb()` genera thumbnail: `https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg`
- **Lite embed** en los 3 videos destacados: div `.lite-embed` con thumbnail + botón play azul, click llama `activarEmbed()` que inyecta el iframe con `?autoplay=1`. El iframe del lightbox no usa este patrón.
- Cards de demos específicas: thumbnail 16:9 + overlay + botón play coloreado por categoría + badge duración
- Hover en cards: CSS puro con clases `.demo-card`, `.demo-thumb`, `.demo-overlay`, `.demo-play` (Tailwind group-hover no funciona con expresiones dinámicas en Astro — no se incluyen en el build)
- **Lightbox de video**: click en card → overlay oscuro con iframe embed + autoplay, título del video en header, cerrar con ✕ / click overlay / Escape
- Categorías y colores:
  - Ventas y caja `#10B981`: Proceso de venta (~4), Caja diaria (~3), Facturación ARCA (~3), Medios de Pago (~4), Presupuestos (~4)
  - Stock `#F59E0B`: Inventarios (~4), Ingresos Mercadería (~2), Egresos Mercadería (~2)
  - Clientes y Proveedores `#06B6D4`: Alta Clientes y Proveedores (~2), Cuentas Corrientes Clientes (~14), Cuentas Corrientes Proveedores (~5)
  - Administración `#8B5CF6`: Alta productos (~6), Imágenes de productos (~3), Cambio precios (~2), Promociones y combos (~9), Informes y Listados (~5), Operadores (~3), Etiquetas Código Barra (~4), Etiquetas Góndolas (~6)
  - Gastronomía `#EF4444`: Gestión mesas y mozos (~4)

### Planes (`bg-brand-dark`)
- Toggle pill animado: Pago único / Mensual (pill deslizante CSS transition)
- **Comercios generales** (grid 4 col):
  - SFC Punto: USD 229 único / USD 99 + USD 19/mes
  - SFC Gestión: USD 299 único / USD 99 + USD 25/mes
  - SFC Gestión Plus: USD 329 único / USD 99 + USD 35/mes ← **destacado**
  - SFC Gestión Premium: USD 439 único / USD 199 + USD 35/mes
- **Gastronomía** (grid 2 col, max-w-2xl centrado):
  - SFC Gastro Simple: USD 349 único / USD 99 + USD 39/mes
  - SFC Gastro Plus: USD 429 único / USD 199 + USD 39/mes ← **destacado**
- Botones "Consultar": WhatsApp con mensaje contextual (nombre del plan + modalidad activa al click)
- Implementación: `data-*` attributes + JS lee `modalidadActual` en el click

### Promociones (`bg-brand-mid`)
- Card split: imagen `promo-combo-pdv.png` + contenido
- Promo activa: "Combo de Locos" USD 749 (antes USD 789)
- Incluye: SFC Punto + Mini PC + Scanner + Ticketera térmica
- Badge "Stock limitado" con animate-pulse
- Botón "Quiero este combo": WhatsApp con mensaje "Me interesa la promo vigente"
- Link final: "Consultanos y armamos un combo a tu medida"

### Energía Solar (`bg-brand-mid`)
- Stats: 1.4kW / 94% batería / 24/7 monitoreo / 0 cortes
- Galería caso real "La Chilena, Córdoba Capital":
  - Foto paneles ancho completo (hero de galería)
  - Fila 4 fotos: inversor, batería, tablero, monitoreo
  - Testimonio centrado: Martín Zárate
- CTA: "Consultanos por tu instalación" → `#contacto`
- Imágenes en `public/images/solar/`

### Testimonios (`bg-brand-dark`)
- Grid 2×2 (mobile: 1 col), 4 clientes reales
- Cada card: cita en cursiva + info del cliente + badge Remoto/Presencial + detalle de compra
- Botón "Ver conversación →" abre lightbox con galería de 3 imágenes por cliente
- Lightbox: flechas prev/next, dots, cerrar con ✕ / click overlay / Escape, navegación teclado ← →
- Imágenes en `public/images/testimonios/` (12 en total, 3 por cliente)
- Clientes:
  1. **Luis Rodríguez** — Despensa DIBU — Aguilares, Tucumán — Software + Hardware — Remoto
  2. **Héctor Leschinsky** — La Esquina del Descartable — Catamarca Capital — Solo software — 100% remoto
  3. **Luciana Quiroga** — El Shop (Mini Super/Drugstore) — Oliva, Córdoba — Software + balanzas — Remoto
  4. **Martín Zárate** — La Chilena (Supermercado/Distribuidora) — Córdoba Capital — Sistema completo 2 sucursales + red + paneles solares — Presencial

### Contacto (`bg-brand-mid`)
- H2 del encabezado de sección incluye "SIN COMPLICACIONES" en `text-yellow-400`
- Grid 2 col: card izquierda (propuesta de valor) + canales derecha
- **Card izquierda** (sin formulario ni input):
  - 3 bullets de dolor con íconos SVG: stock desactualizado / ventas sin control / facturación manual
  - Frase gancho debajo de los bullets
  - Botón WhatsApp verde que dispara directo a `wa.link/tcc76s` (sin fricción, sin input de nombre)
  - Evento `Contact` (analytics) se dispara al click del botón — no al envío del mensaje
- **Canales secundarios** (col derecha): WhatsApp / Email / Instagram con hover colors temáticos

### Footer (`bg-brand-dark`)
- Grid 3 col: logo+tagline+redes / nav col1 / nav col2
- Logo `h-8`, tagline, iconos sociales (WhatsApp, Instagram, Email)
- Navegación completa (8 links, dividida en 2 columnas)
- Copyright dinámico con `new Date().getFullYear()`

### WhatsAppFloat
- Botón flotante verde `#25D366`, esquina inferior derecha, `z-50`
- Aparece al scrollear más allá del Hero (85vh), desaparece al volver arriba
- Animación: `opacity` + `translateY` con transition
- Mensaje: "Hola! 👋 Vengo de la web de Lugic Systems. Quisiera obtener más información."

## Datos de contacto
- **WhatsApp:** +5493512548711 · link directo: https://wa.link/tcc76s
- **Email:** info@lugicsystems.com.ar
- **Instagram:** @lugicsystems · https://instagram.com/lugicsystems

## Estado actual
**Landing 100% completa. Sin pendientes técnicos.**

Completado:
- SEO: meta tags, Open Graph (`og:locale: es_AR`), Twitter Card, canonical URL, favicon, apple-touch-icon
- Imagen OG: `/public/images/og-image.png` (1200×630)
- Sitemap: `@astrojs/sitemap` 3.7.2 — genera `sitemap-index.xml` + `sitemap-0.xml` en build
- `robots.txt`: en `/public`, bloquea AI training (Cloudflare managed)
- Analytics: Cloudflare Web Analytics (token: `0ffe288bffbd4017877134a394376b71`)
- `astro.config.mjs`: `site = 'https://www.lugicsystems.com.ar'`
- Demo: 23 videos reales YouTube, thumbnails, lightbox, intro/cierre, helpers toEmbed/toThumb
- Productos: imagen caja SFC Legacy, bloque equipamiento (5 equipos), badge Windows
- Header: hover animado en nav links (subrayado desde el centro)
- Schema.org: JSON-LD `LocalBusiness` + `ProfessionalService` en `<head>` — verificado con Google Rich Results Test (2 elementos válidos)
- Performance: `loading="lazy"` en todas las imágenes fuera del viewport inicial; `loading="eager"` en Hero y Header
- Performance: YouTube lite embed en los 3 videos destacados (Intro, Demo general, Cierre) — thumbnail + play, iframe se inyecta al click

Pendientes:
- Ninguno

## Convenciones de commits
Semánticos: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `chore:`

## Workflow
- Dev: `npm run dev` → localhost:4321
- Antes de push: `npm run build`
- Push a main → deploy automático Cloudflare Pages
- Verificar en ls-landing.pages.dev
- **Git:** GitHub Desktop (NO CLI)

## Reglas de trabajo
- Todo código en ARTIFACTS — NUNCA suelto en el chat ni en bloques de texto (tags HTML/Astro se renderizan y desaparecen)
- Mobile-first siempre
- Performance > efectos visuales
- Primero funciona, después queda lindo, después rápido
- Cada cambio significativo = 1 commit
- Hover effects con CSS puro en `<style>` — no usar Tailwind group-hover con valores dinámicos en Astro (no se incluyen en el build)

## Empresa (copy)
- **Nombre:** Lugic Systems
- **Ubicación:** Córdoba Capital, Argentina
- **Slogan:** "Software y Tecnología para Negocios Inteligentes"
- **Producto principal:** SFC Legacy (VB6, escritorio)
- **Colores:** azul `#2D6BE4` del logo (PNG disponible, no vectorial)
- **Rubros atendidos:** supermercados, drugstores, kioscos, almacenes, ferreterías, bares, cafeterías, rotiserías, repuestos, comercios en general
- **Servicios:** software, equipamiento comercial, redes, cámaras, energía solar
- **Cobertura:** Córdoba (fuerte) + todo Argentina (envíos + soporte remoto)
