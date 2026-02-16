# KoldoGate Archives

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://koldogate-archives.github.io)
[![License](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

> **Archivo investigativo sobre el caso de corrupción COVID-19 en España**

[KoldoGate Archives](https://koldogate-archives.github.io) es un sitio web estático de documentación del caso conocido como "Caso Koldo" o "KoldoGate", una investigación judicial sobre presuntos contratos irregulares de material sanitario durante la pandemia de COVID-19 y adjudicaciones de obra pública.

## Características

- **Timeline interactiva**: Cronología completa de eventos desde 2018 hasta 2025
- **Fuentes primarias**: Enlaces directos a BOE, sentencias judiciales y declaraciones parlamentarias
- **Actores**: Tarjetas de implicados con información verificada
- **Mapa de conexiones**: Visualización interactiva con D3.js de relaciones entre empresas y políticos
- **Búsqueda local**: Búsqueda en tiempo real con Fuse.js
- **Diseño vault**: Interfaz tipo consola de investigación (dark mode)
- **RSS feed**: Suscripción a actualizaciones
- **Totalmente estático**: Compatible con GitHub Pages, sin backend

## Estructura del proyecto

```
koldogate-archives/
├── index.html          # Página principal
├── style.css           # Estilos (dark mode vault)
├── data.js             # Datos del caso (timeline, actores, grafo)
├── app.js              # Interactividad (D3, Fuse, filtros)
├── rss.xml             # Feed RSS
└── README.md           # Este archivo
```

## Despliegue en GitHub Pages

### 1. Crear el repositorio

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Nómbralo `koldogate-archives` (o el nombre que prefieras)
3. Asegúrate de que sea público

### 2. Subir los archivos

Opción A: Por web
- Ve a tu repositorio en GitHub
- Haz clic en "Add file" → "Upload files"
- Sube todos los archivos del proyecto

Opción B: Por línea de comandos
```bash
git clone https://github.com/TU_USUARIO/koldogate-archives.git
cd koldogate-archives
# Copia todos los archivos del proyecto
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. Activar GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio
2. En "Source", selecciona **Deploy from a branch**
3. Selecciona la rama `main` y carpeta `/ (root)`
4. Haz clic en **Save**
5. Espera unos minutos y tu sitio estará en `https://TU_USUARIO.github.io/koldogate-archives`

## Fuentes de datos

Toda la información del sitio proviene de **fuentes públicas oficiales**:

- **BOE** (Boletín Oficial del Estado): Contratos y decretos
- **Poder Judicial**: Sentencias y resoluciones
- **Congreso de los Diputados**: Declaraciones parlamentarias
- **UCO** (Unidad Central Operativa): Informes de investigación
- **Audiencia Nacional**: Diligencias judiciales

## Aviso legal

> Este sitio recopila información de **dominio público** y fuentes oficiales.
>
> - Toda la información proviene de fuentes públicas: BOE, sentencias judiciales, declaraciones parlamentarias oficiales.
> - No se reproduce contenido de medios privados protegidos por copyright.
> - Los implicados son **presuntos inocentes** hasta sentencia firme.
> - Este archivo tiene fines informativos y de transparencia democrática.
> - Se respetan los derechos fundamentales y la presunción de inocencia.

## Tecnologías utilizadas

- **HTML5** semántico
- **CSS3** con variables CSS y Grid/Flexbox
- **JavaScript vanilla** (ES6+)
- **D3.js v7** para visualización de grafos
- **Fuse.js v7** para búsqueda difusa
- **Fuentes**: Fira Code (monospace), Inter (sans-serif)

## Personalización

### Añadir nuevos eventos a la timeline

Edita `data.js` y añade un objeto al array `timelineEvents`:

```javascript
{
    id: 21,
    date: "2025-XX-XX",
    dateDisplay: "Mes Año",
    title: "Título del evento",
    description: "Descripción del evento",
    type: "judicial|politico|contrato|investigacion",
    amount: "€X.XXX.XXX", // opcional
    sources: ["https://..."] // opcional
}
```

### Añadir nuevos actores

Edita `data.js` y añade un objeto al array `actorsData`:

```javascript
{
    id: "identificador-unico",
    name: "Nombre Completo",
    position: "Cargo",
    role: "politico|empresario|intermediario|funcionario",
    status: "imputado|investigado|testigo",
    statusLabel: "Etiqueta visible",
    description: "Descripción",
    wikipedia: "https://es.wikipedia.org/..." // opcional
}
```

### Actualizar el RSS

Edita `rss.xml` y añade nuevos items `<item>` siguiendo el formato existente.

## Atajos de teclado

| Tecla | Acción |
|-------|--------|
| `/` | Enfocar búsqueda |
| `Esc` | Cerrar resultados de búsqueda |

## Licencia

Este proyecto está bajo licencia [Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

Los datos son de dominio público. El código fuente está disponible para uso, modificación y distribución con atribución.

## Descargo de responsabilidad

Este es un proyecto de **archivo documental** con fines informativos. No afirma la culpabilidad de ninguna persona mencionada. Todas las afirmaciones están basadas en documentos oficiales públicos. Las opiniones expresadas son responsabilidad de los usuarios, no del proyecto.

---

**Última actualización**: 17 de febrero de 2025  
**Versión**: 1.0.0
