import dotenv from 'dotenv';
import api from './api'

// Cargar variables de entorno desde .env
dotenv.config();

const port = process.env.PORT || 3000;

api.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
