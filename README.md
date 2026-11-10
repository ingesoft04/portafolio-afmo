# Portafolio FMV InfraSec

Portafolio bilingüe de Andrés Felipe Martínez Obando para oportunidades remotas en ingeniería de software, seguridad de la información, infraestructura, soporte técnico y mecatrónica automotriz.

## Datos públicos

- Correo: `ingenierossoftware31@gmail.com`
- Teléfono y WhatsApp corporativo: `+57 302 528 6029`
- Idiomas de la web: español e inglés
- Apariencia: modo claro y oscuro
- LinkedIn: `linkedin.com/in/anmartinez94`
- GitHub: `github.com/ingesoft04`
- Upwork: `freelancers/~0199b81b4f763382ef`

## Requisitos

- Node.js 22.13 o superior
- pnpm 10 o superior
- Git
- Docker Desktop o Docker Engine, únicamente para la ruta con contenedores

## Windows

Abra PowerShell:

```powershell
cd C:\Personal\Portafolio
pnpm install
pnpm run dev
```

Abra `http://localhost:3000/`. Para probar la versión de producción:

```powershell
pnpm run build
pnpm start
```

## Linux

```bash
cd /ruta/Portafolio
pnpm install
pnpm run dev
```

Para producción:

```bash
pnpm run build
PORT=3000 pnpm start
```

Use un proxy inverso como Nginx, Caddy o Traefik para publicar con HTTPS.

## Docker en Windows o Linux

Construir y ejecutar:

```bash
docker compose up -d --build
```

Abrir `http://localhost:3000/`.

Ver estado y registros:

```bash
docker compose ps
docker compose logs -f portfolio
```

Detener:

```bash
docker compose down
```

Para usar otro puerto público:

```powershell
$env:PORTFOLIO_PORT=8080
docker compose up -d --build
```

En Linux:

```bash
PORTFOLIO_PORT=8080 docker compose up -d --build
```

## Publicación en Internet

Rutas recomendadas:

1. Codex Sites: despliegue integrado desde este proyecto.
2. GitHub y Vercel: publicación automática después de cada `git push`.
3. Servidor Linux con Docker: ejecutar `docker compose up -d --build` detrás de HTTPS.
4. Windows Server con Docker Desktop: útil para una instalación administrada, aunque Linux suele requerir menos mantenimiento.

En el proveedor defina `NEXT_PUBLIC_SITE_URL` con el dominio final. Así la URL canónica, los datos estructurados y la tarjeta social `public/og.png` apuntan al sitio publicado.

### Vercel

El proyecto utiliza Next.js nativo y puede importarse directamente desde GitHub en Vercel:

1. Importe `ingesoft04/portafolio-afmo` y seleccione `main` como rama de producción.
2. Mantenga el Framework Preset en **Next.js** y el directorio raíz en la raíz del repositorio.
3. Defina `NEXT_PUBLIC_BASE_PATH` vacío.
4. Defina `NEXT_PUBLIC_SITE_URL` con la URL pública final y aplíquela a Production.
5. Use las URL Preview generadas para cada pull request antes de fusionar.
6. Añada el dominio personalizado únicamente después de validar HTML, logos, documentos, SEO y enlaces en Preview.

La VM puede mantenerse como respaldo durante la transición. No cambie DNS ni retire el contenedor productivo hasta que el despliegue de Vercel haya superado las comprobaciones.

## Arquitectura

- `app/page.tsx`: composición y contenido bilingüe.
- `app/components/`: cabecera, selector por oportunidad, casos anonimizados y contacto.
- `app/hooks/`: preferencias persistentes de idioma y tema.
- `app/layout.tsx`: SEO, Open Graph, Twitter Card y datos estructurados.
- `build/`: generación y validación de perfiles PDF y manuales.

## Actualizar la web

Después de modificar contenido o estilos:

```bash
pnpm run docs:profiles
pnpm run build
```

Los PDF regenerados se copian a `public/` y quedan incluidos en la siguiente compilación. Los manuales DOCX deben regenerarse con el runtime documental configurado en Codex y revisarse visualmente antes de entregarlos.

## Seguridad

- No agregue archivos `.env`, tokens, contraseñas o llaves privadas.
- No publique repositorios ni accesos productivos de los casos de estudio.
- Mantenga GitHub, proveedor de alojamiento, dominio y correo protegidos con MFA.
- Cambie credenciales de laboratorio antes de cualquier despliegue real.
- Valide siempre los modos claro/oscuro, idiomas, enlaces y PDF.
