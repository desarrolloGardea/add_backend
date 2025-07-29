import express, { Request, Response } from 'express';
import { ApiResponse } from '@/domain/apiResponse';
/**
 * se instancia la API
 */
const api = express();

/**
 * ruta base de la API
 */
api.get('/', (req: Request, res: Response) => {

  const response: ApiResponse = {
    isOk: true,
    message: 'Hello, TypeScript with Express!',
    data: null
  };

  res.status(200).json(response);
});

/**
 * middleware que solo analiza JSON y solo observa
 * las solicitudes en las que el encabezado de tipo
 * de contenido coincide con la opción de tipo
 */
api.use(express.json());

/**
 * router general de la API:
 * aqui se definen las rutas base para las
 * diversas funcionalidades de la aplicación
 */
export default api;
