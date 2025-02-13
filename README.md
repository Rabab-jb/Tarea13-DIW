# Tarea13-DIW
(instagram - tiempo)
# 📌 Proyecto React: Instagram Sidebar & Weather Widget

Este proyecto combina **dos aplicaciones** dentro de un solo entorno de desarrollo en **React + Vite + TypeScript + Bootstrap**.

- 📌 **Sidebar de Instagram:** Un menú lateral inspirado en Instagram.
- 🌤 **Widget del Clima:** Un pronóstico del tiempo con gráfico de temperaturas.

---

## 🚀 **Tecnologías utilizadas**

- **React** ⚛️ - Librería principal
- **Vite** ⚡ - Bundler rápido
- **TypeScript** 🟦 - Tipado fuerte
- **Bootstrap** 🎨 - Estilización
- **Chart.js** 📊 - Gráfico de temperatura

---

## 📌 **Instalación**

Clona el repositorio y entra en la carpeta del proyecto:

```sh
 git clone https://github.com/tuusuario/proyecto-tema13.git
 cd proyecto-tema13
```

Instala las dependencias:

```sh
npm install
```

Ejecuta el servidor de desarrollo:

```sh
npm run dev
```

---

## 📌 **1️⃣ Sidebar de Instagram**

📌 **Descripción:** Menú lateral con los iconos y opciones de Instagram.

✅ **Características:**
- Lista de opciones con iconos de Bootstrap.
- Destaca el ítem seleccionado.
- Diseño responsivo con Bootstrap.

📌 **Ubicación del código:**
```
/src/components/Sidebar/
  ├── Sidebar.tsx
  ├── SidebarItem.tsx
```

📌 **Ejemplo de Código:**
```tsx
<Sidebar />
```

---

## 📌 **2️⃣ Widget del Clima**

📌 **Descripción:** Muestra el pronóstico del clima con datos como temperatura, humedad y viento.

✅ **Características:**
- Información del clima actual.
- Pronóstico de los próximos días.
- Gráfico de temperatura con **Chart.js**.

📌 **Ubicación del código:**
```
/src/components/Weather/
  ├── WeatherWidget.tsx
  ├── WeatherInfo.tsx
  ├── WeatherForecast.tsx
  ├── WeatherItem.tsx
  ├── WeatherChart.tsx
```

📌 **Ejemplo de Código:**
```tsx
<WeatherWidget />
```

---

## 📌 **3️⃣ Estructura del Proyecto**

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

## 📌 **Contacto**
Si tienes alguna pregunta, no dudes en escribirme. 😃🚀

