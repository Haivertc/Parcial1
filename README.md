# Parcial1

## Descripción
Esta es una aplicación web que permite gestionar personajes de Star Wars a partir de un archivo JSON. La aplicación usa **Node.js**, **Express**, y **EJS** como motor de vistas.

## 📌 Requisitos
Antes de ejecutar la aplicación, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## 🚀 Instalación y ejecución
### 1️⃣ Clonar el repositorio
```sh
 git clone https://github.com/Haivertc/Parcial1.git
 cd Parcial1
```

### 2️⃣ Instalar dependencias
```sh
 npm install
```

### 3️⃣ Ejecutar el servidor
```sh
 node server.js
```

El servidor se ejecutará en `http://localhost:3000/`.

## 📁 Estructura del Proyecto
```
Parcial1/
│-- node_modules/
│-- data/
│   ├── characters.js  # Módulo con los datos de los personajes
│   ├── starwar.json  # Archivo con los datos de los personajes
│-- public/
│   ├── scripts.js  # Archivo JavaScript para interactividad del cliente
│-- routes/
│   ├── characters.js  # Módulo con las rutas de la API
│-- views/
│   ├── index.ejs  # Vista principal
│   ├── styles.css  # Archivo CSS para mejorar el diseño
│-- server.js  # Servidor principal con Express
│-- package.json  # Configuración del proyecto
│-- README.md  # Documentación
```

## 🛠️ Rutas Disponibles
- `GET /` → Página principal con la tabla de personajes
- `GET /characters` → Devuelve el JSON con los personajes

## 📌 Mejoras Visuales
La aplicación usa CSS para mejorar la presentación de los personajes y hacer que la interfaz sea más agradable.

