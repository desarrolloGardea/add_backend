import dotenv from 'dotenv';
import api from './api'
import MongoConnector from './services/mongo.connector';
import { UserModel } from './models/users.model';
import bcrypt from 'bcrypt';
import { Role } from './domain/role';

// Cargar variables de entorno desde .env
dotenv.config();

const port = process.env.PORT || 3000;

api.listen(port, () => {
  MongoConnector.connect().then(async () => {
    console.log('MongoDB connected');
    // Create a test user if it doesn't exist
    const user = await UserModel.findOne({ username: 'admin' });
    if (!user) {
      const hashedPassword = await bcrypt.hash('admin', 10);
      const newUser = new UserModel({
        username: 'admin',
        password: hashedPassword,
        role: Role.ADMIN
      });
      await newUser.save();
      console.log('Test user created');
    }
  }).catch((err: Error) => {
    console.log('MongoDB connection error', err.message);
    process.exit(1);
  })
  console.log(`Server is running at http://localhost:${port}`);
});
