import dotenv from 'dotenv';
import api from './api'
import MongoConnector from './services/mongo.connector';

// Cargar variables de entorno desde .env
dotenv.config();

const port = process.env.PORT || 3000;

api.listen(port, () => {
  MongoConnector.connect().then(() => {
    console.log('MongoDB connected');
  }).catch((err: Error) => {
    console.log('MongoDB connection error', err.message);
    process.exit(1);
  })
  console.log(`Server is running at http://localhost:${port}`);
});
