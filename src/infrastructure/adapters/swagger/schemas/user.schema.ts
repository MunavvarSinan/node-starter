// swagger-schemas/user.schemas.ts
import { OpenAPIV3 } from 'openapi-types';

export const CreateRequestSchema: OpenAPIV3.SchemaObject = {
    type: 'object',
    properties: {
        name: { type: 'string', example: 'test' },
        email: { type: 'string', example: 'testemail@gmail.com' },
        age: { type: 'number' }
    },
    required: ['name', 'email'],
};
