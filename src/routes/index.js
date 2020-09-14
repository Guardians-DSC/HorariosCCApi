import { Router } from 'express';
import horariosRouter from './horarios.routes';

const routes = Router();

routes.get('/', (request, response) => {
    response.json({
        message: 'Hello World! 🌎',
    });
});
routes.use('/', horariosRouter);


export default routes;