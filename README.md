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

📂 Taller_API/
├── 📂 middleware/       # Middleware de autenticación
│   ├── auth.js          # Validación de JWT
├── 📂 models/           # Modelos de datos
│   ├── User.js          # Modelo de usuario
│   ├── Task.js          # Modelo de tarea
├── 📂 routes/           # Rutas de la API
│   ├── userRoutes.js    # Endpoints de usuarios
│   ├── taskRoutes.js    # Endpoints de tareas
├── 📂 node_modules/     # Dependencias (autogenerado por npm)
├── server.js           # Servidor principal
├── swagger.js          # Configuración de Swagger
├── README.md           # Documentación de la API
├── .env.example        # Variables de entorno de ejemplo
├── package.json        # Configuración del proyecto y dependencias

## 🛠️ Rutas Disponibles
- `GET /` → Página principal con la tabla de personajes
- `GET /characters` → Devuelve el JSON con los personajes

## 📌 Mejoras Visuales
La aplicación usa CSS para mejorar la presentación de los personajes y hacer que la interfaz sea más agradable.

