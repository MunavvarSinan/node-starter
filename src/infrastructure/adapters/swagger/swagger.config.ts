import { OpenAPIV3 } from 'openapi-types';
import { paths } from './paths';
import { tags } from './tags';

export const swaggerConfig: OpenAPIV3.Document = {
    openapi: '3.0.0',
    info: {
        title: 'Nodejs Docker Starter - API Documentation',
        version: '1.0.0',
    },
    tags,
    paths
};