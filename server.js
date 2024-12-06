require('dotenv').config();
const connectDB = require('./src/config/db');
const app = require('./src/app'); // Importar la app configurada

// Conectar a la base de datos
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
