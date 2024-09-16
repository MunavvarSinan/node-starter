import { OpenAPIV3 } from 'openapi-types';
import { CreateRequestSchema } from '../schemas/user.schema';


export const userPaths: OpenAPIV3.PathsObject = {
    '/api/user/create': {
        post: {
            tags: ['Users'],
            summary: 'Create a new user',
            description: 'Creates a new user with the provided details.',
            requestBody: {
                description: 'User details to create',
                required: true,
                content: {
                    'application/json': {
                        schema: CreateRequestSchema,
                    },
                },
            },
            responses: {
                '201': {
                    description: 'User created successfully',
                },
                '400': {
                    description: 'Invalid input data'
                },
                '409': {
                    description: 'User already exists',
                },
            },
        },
    },
};