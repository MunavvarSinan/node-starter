import swaggerUi from 'swagger-ui-express';
import { swaggerConfig } from './swagger.config';
import { Application } from 'express';

const setupSwagger = (app: Application) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
};

export default setupSwagger;