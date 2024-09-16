import { OpenAPIV3 } from 'openapi-types';
import { userPaths } from './user.path';

export const paths: OpenAPIV3.PathsObject = {
    ...userPaths,
};