# ls-landing

Landing corporativa de **Lugic Systems**.

🌐 **Producción**: [www.lugicsystems.com.ar](https://www.lugicsystems.com.ar)
🔧 **Preview Pages**: [ls-landing.pages.dev](https://ls-landing.pages.dev)

## Stack

- [Astro](https://astro.build) — framework web orientado a contenido, output estático optimizado.
- [Tailwind CSS](https://tailwindcss.com) — sistema de utilidades para estilos (pendiente de integrar).
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting y deploy automático desde `main`.

## Desarrollo local

### Requisitos

- Node.js 20.3+ / 22+ / 24+ (LTS recomendada).
- npm (incluido con Node).
- Git.

### Setup

```bash
git clone https://github.com/lugicsystems/ls-landing.git
cd ls-landing
npm install
npm run dev
```

Dev server corre en `http://localhost:4321` con hot reload.

### Scripts disponibles

| Comando           | Acción                                           |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Inicia dev server con hot reload en `:4321`.     |
| `npm run build`   | Compila producción a `./dist/`.                  |
| `npm run preview` | Sirve el build de producción localmente.         |
| `npm run astro`   | Ejecuta el CLI de Astro (`astro add`, etc.).     |

## Estructura

```
/
├── public/           # Assets estáticos (favicon, og-image, robots.txt, etc.)
├── src/
│   ├── components/   # Componentes reutilizables (Header, Footer, etc.)
│   ├── layouts/      # Layouts base compartidos entre páginas
│   └── pages/        # Rutas (cada .astro/.md es una URL)
└── astro.config.mjs  # Configuración de Astro e integraciones
```

## Convenciones

- **Commits semánticos**: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `chore:`.
- **Mobile-first**: diseñamos primero para mobile, escalamos a desktop.
- **Performance > efectos**: target <2s de carga en 4G.
- **Accesibilidad básica**: contraste, `alt` en imágenes, semántica HTML.

## Deploy

Push a `main` → Cloudflare Pages despliega automáticamente.

Antes de pushear: correr `npm run build` local para validar que compila sin errores.