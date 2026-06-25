# NeoGear Website

Sitio web oficial de NeoGear Córdoba. Catálogo de productos, venta de hitbox, arcade sticks, repuestos arcade y tecnología para el juego competitivo.

## Cambios Recientes (Actualizaciones)

El sitio ha sido refactorizado para automatizar la gestión de productos y galerías, mejorando la experiencia de usuario y facilitando el mantenimiento:

### 1. Catálogo Dinámico con Carrusel
- **Detección Automática de Productos:** El script `scripts/generate-catalog.js` lee la estructura de carpetas en `public/productos` (ej. `Hitbox Cover`, `Brook PS5 FGC1`) y construye dinámicamente `src/data/productos.json`.
- **Carrusel Táctil:** Se implementó el componente `ProductCard.jsx`, el cual detecta cuando un producto tiene múltiples imágenes y genera automáticamente un carrusel navegable (con flechas, indicadores y scroll magnético `snap-x` ideal para móviles).
- **Scripts de Build Automáticos:** Los *hooks* `predev` y `prebuild` en `package.json` garantizan que cualquier imagen agregada a las carpetas sea compilada sin necesidad de configuración manual.

### 2. Galería de Comunidad con Modal Inmersivo
- **Galería Dinámica:** El script `scripts/generate-gallery.js` explora la carpeta `public/galeria` para auto-generar `src/data/galeria.json`.
- **Grilla Responsiva:** El componente `Gallery.jsx` fue reescrito para usar una cuadrícula dinámica que adapta el número de columnas (de 2 a 4) según el dispositivo, empleando `object-cover` para mantener una estética unificada en las miniaturas.
- **Lightbox (Modal):** Al hacer clic sobre cualquier imagen de la galería, esta se amplía usando Framer Motion con un overlay oscuro y efecto *blur*. Respeta proporciones originales (`object-contain`) y cuenta con múltiples opciones de cierre intuitivas (X, Escape, clic fuera).

### 3. Ajustes de UI & Contenido
- **Logo Ampliado:** Se incrementó el tamaño del logo principal en el Navbar (de `h-10 md:h-12` a `h-16 md:h-20 lg:h-24`) para mayor presencia de marca.
- **Actualización de Copy:** Se reemplazó el texto descriptivo del Footer a *"Venta de hitbox, arcade stick, repuestos arcade y tecnología. De Córdoba al resto del país."* corrigiendo errores ortográficos y adaptando el mensaje al modelo de negocio de ventas.

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Correr servidor de desarrollo (los scripts predev actualizarán los JSONs automáticamente)
npm run dev

# Compilar para producción (los scripts prebuild preparan el catálogo y la galería)
npm run build
```
