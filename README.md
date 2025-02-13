# Proyecto React: Sidebar de Instagram & Widget del Clima

Este proyecto combina dos aplicaciones en un solo entorno de desarrollo utilizando **React**, **Vite** y **TypeScript**. La idea es construir una interfaz sencilla y funcional, con un menú lateral inspirado en Instagram y un widget de clima con pronóstico detallado.

---

## Tecnologías utilizadas

Para desarrollar este proyecto, usamos:

- **React** - Para la estructura de los componentes.
- **Vite** - Para optimizar el rendimiento del desarrollo.
- **TypeScript** - Para un código más seguro y mantenible.
- **Bootstrap** - Para un diseño responsivo y estilizado.
- **Chart.js** - Para visualizar la evolución de la temperatura en un gráfico.

---

## Instalación y ejecución

Si quieres probar este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio y accede a la carpeta del proyecto:

```sh
git clone https://github.com/tuusuario/proyecto-tema13.git
cd proyecto-tema13
```

2. Instala las dependencias necesarias:

```sh
npm install
```

3. Ejecuta el servidor de desarrollo:

```sh
npm run dev
```

Esto iniciará la aplicación y podrás verla en tu navegador.

---

## 1. Sidebar de Instagram

Este componente representa un **menú lateral inspirado en Instagram**, con navegación entre diferentes secciones.

### Características:
- Lista de opciones con iconos.
- Destaca el ítem seleccionado.
- Diseño responsivo.

### Ubicación del código:
```
/src/components/Sidebar/
  ├── Sidebar.tsx
  ├── SidebarItem.tsx
```

### Uso:
```tsx
<Sidebar />
```

---

## 2. Widget del Clima

Este componente muestra información del clima actual, junto con un pronóstico de los próximos días.

### Características:
- Muestra la temperatura, humedad y velocidad del viento.
- Incluye un gráfico de temperatura con **Chart.js**.
- Pronóstico extendido con iconos de clima.

### Ubicación del código:
```
/src/components/Weather/
  ├── WeatherWidget.tsx
  ├── WeatherInfo.tsx
  ├── WeatherForecast.tsx
  ├── WeatherItem.tsx
  ├── WeatherChart.tsx
```

### Uso:
```tsx
<WeatherWidget />
```

---

## 3. Estructura del Proyecto

Para organizar mejor los componentes, la estructura del proyecto es la siguiente:

```
/src
  ├── /components
  │   ├── /Sidebar        # Sidebar de Instagram
  │   ├── /Weather        # Widget del clima
  ├── App.tsx             # Renderiza ambos proyectos
  ├── main.tsx            # Configuración principal
  ├── index.css           # Estilos globales
```

---

## Contacto
Si tienes alguna duda o sugerencia, no dudes en ponerte en contacto conmigo.



