# plantilla_backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff&style=for-the-badge)![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=for-the-badge)

Este documento proporciona una guía básica para configurar un proyecto de Express con TypeScript, Docker, y Yarn como gestor de paquetes.

## Requisitos previos
Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu entorno de desarrollo:

- **Node.js** (https://nodejs.org)
- **Yarn** (https://yarnpkg.com)
- **Docker** (https://www.docker.com/get-started)

Puedes verificar las versiones instaladas con los siguientes comandos:
```bash
node -v
yarn -v
docker -v
```

## Pasos para la configuración
### 1. Instalar las dependencias necesarias
Ejecuta el siguiente comando para crear realizar la instalación:

```bash
yarn
```

### 2. Ejecutar el servidor de desarrollo
Para verificar que todo está configurado correctamente, inicia el servidor de desarrollo con:

```bash
yarn dev
```

### 3. Compilar el proyecto para producción
Cuando estés listo para preparar tu proyecto para producción, puedes ejecutar el siguiente comando:

```bash
yarn build
```

### 4. Construir y ejecutar la aplicación en Docker
Para construir la imagen de Docker y ejecutar el proyecto, usa los siguientes comandos:

```bash
docker-compose up --build
```

Esto levantará la aplicación y la expondrá en `http://localhost:3000`.

---

Con esta configuración, tendrás una plantilla moderna y eficiente para desarrollar aplicaciones con Express, TypeScript y Docker utilizando Yarn.
