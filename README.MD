# Parqueadero API

## Descripción

Este proyecto es una API para gestionar el registro de vehículos en un parqueadero. Permite registrar la entrada y salida de vehículos, verificar la disponibilidad de espacios para diferentes tipos de vehículos (automóviles y motocicletas), y eliminar registros de vehículos de manera administrativa.

## Características

- Registrar vehículos: Permite registrar vehículos en el parqueadero con número de placa y tipo de vehículo.
- Verificar disponibilidad: La API verifica la disponibilidad de espacio para automóviles y motocicletas.
- Registrar salida: Actualiza el registro de salida de un vehículo con la hora de salida.
- Eliminar vehículos: Permite eliminar vehículos del registro de manera administrativa.
- Control de capacidad: El parqueadero tiene una capacidad máxima de 5 autos y 10 motocicletas.

## Tecnologías
- Node.js: Entorno de ejecución de JavaScript en el servidor.
- Express: Framework web para Node.js.
- MongoDB: Base de datos NoSQL.
- Mongoose: ODM para MongoDB.
- dotenv: Gestión de variables de entorno.
- Cors: Permite solicitudes de otros dominios.
- body-parser: Middleware para analizar cuerpos de solicitudes.

## Instalación
### 1. Clona el repositorio:

<pre>```bash
git clone https://github.com/tu-usuario/parqueadero-api.git </pre>

### 2. Navega al directorio del proyecto:

### 3. Instala las dependencias

### 4. Crea un archivo .env en la raíz del proyecto y agrega tu URI de MongoDB Atlas:

### 5. Inicia el servidor:
