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

<pre> git clone https://github.com/tu-usuario/parqueadero-api.git </pre>

### 2. Navega al directorio del proyecto:

<pre> cd parqueadero-api </pre>

### 3. Instala las dependencias

<pre> npm install </pre>

### 4. Crea un archivo .env en la raíz del proyecto y agrega tu URI de MongoDB Atlas:

<pre> MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/<nombre_base_de_datos>?retryWrites=true&w=majority </pre>

### 5. Inicia el servidor:

<pre> npm start </pre>

## Endpoints
### 1. GET /api/vehicles
Obtiene todos los vehículos registrados.
<pre>
Respuesta:
[
  {
    "licensePlate": "ABC123",
    "type": "car",
    "entryTime": "2024-12-06T10:00:00Z",
    "exitTime": null
  },
  {
    "licensePlate": "XYZ456",
    "type": "motorcycle",
    "entryTime": "2024-12-06T11:00:00Z",
    "exitTime": null
  }
]

</pre>


### 2. POST /api/vehicles
Registra un nuevo vehículo.
<pre>

Parámetros (body):

{
  "licensePlate": "ABC123",
  "type": "car"
}
Respuesta:

{
  "licensePlate": "ABC123",
  "type": "car",
  "entryTime": "2024-12-06T12:00:00Z",
  "exitTime": null
}
</pre>


### 3. PUT /api/vehicles/:licensePlate/exit
Registra la salida de un vehículo.
<pre>

Parámetros (url):

licensePlate: La matrícula del vehículo.
Respuesta:

{
  "licensePlate": "ABC123",
  "type": "car",
  "entryTime": "2024-12-06T10:00:00Z",
  "exitTime": "2024-12-06T14:00:00Z"
}
</pre>


### 4. DELETE /api/vehicles/:licensePlate
Elimina un vehículo del registro.
<pre>

Parámetros (url):

licensePlate: La matrícula del vehículo.
Respuesta:

{
  "message": "Vehicle deleted successfully."
}
</pre>

### Estructura del proyecto
<pre>
/parqueadero-api
│
├── src/
│   ├── config/                # Configuración de la base de datos
│   ├── controllers/           # Lógica de los controladores
│   ├── middleWare/            # Middlewares
│   ├── models/                # Modelos de Mongoose
│   ├── routes/                # Rutas de la API
│   └── app.js                 # Configuración de Express
│
├── .env                       # Variables de entorno
├── server.js                  # Archivo de inicio del servidor
├── package.json               # Dependencias y scripts
└── README.md                  # Documentación del proyecto
</pre>
