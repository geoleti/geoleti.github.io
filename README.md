# GeoLeti — geografía, datos y territorio

Portfolio construido con **Jekyll** para publicarse en **GitHub Pages**. El sitio agrupa proyectos geográficos existentes, sin trasladar ni modificar sus repositorios.

## Publicar por primera vez

1. Crear un repositorio **público** llamado exactamente `geoleti.github.io` en la cuenta `geoleti`.
2. Descomprimir el archivo ZIP de entrega en tu computadora.
3. Subir **el contenido de la carpeta** `geoleti-jekyll` a la raíz del repositorio nuevo (no subir el ZIP ni una carpeta contenedora). En GitHub: `Add file` → `Upload files` o usar GitHub Desktop.
4. Ir a `Settings` → `Pages`. Seleccionar `Deploy from a branch`, rama `main`, carpeta `/(root)` y guardar.
5. Acceder a `https://geoleti.github.io/` una vez que GitHub complete el proceso de publicación.

**Nota:** para usar Jekyll, no agregar un archivo `.nojekyll`.

## Agregar o editar proyectos

Editar `_data/proyectos.yml`. Cada bloque contiene nombre, descripción, etiquetas, enlaces, categoría, estado, diseño de tarjeta y la opción `destacado: true` para mostrarlo en la portada.

Las tarjetas aparecen automáticamente en `/proyectos/`. Las categorías definidas para el filtro son `WebSIG`, `Cartografía` y `Datos`. Si agregás otra categoría, sumá un botón en `proyectos/index.html`.

## Cambiar textos y estilos

- Portada: `index.html`
- Sobre mí: `sobre-mi/index.html`
- Navegación, encabezado y pie: `_layouts/default.html`
- Colores y diseño: `assets/css/style.css`
- Menú móvil y filtros: `assets/js/main.js`
- Configuración del sitio: `_config.yml`

## Consideraciones

- Los enlaces a páginas de proyectos corresponden a las direcciones previstas de GitHub Pages; conviene comprobarlos cuando el portal esté publicado.
- Los proyectos en desarrollo enlazan a su repositorio y no se presentan como aplicaciones terminadas.
- No requiere base de datos ni servicios de pago para funcionar.
- Google Fonts es opcional; el sitio usa fuentes de reserva del sistema si no se pueden cargar.
