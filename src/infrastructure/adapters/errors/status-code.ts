export const STATUS_CODE = {
    OK: 200,
    CREATED: 201,               // Successfully created a resource
    ACCEPTED: 202,              // Request accepted but not completed
    NO_CONTENT: 204,            // Successfully processed request, but no content to return
    BAD_REQUEST: 400,           // The server could not understand the request due to invalid syntax
    UNAUTHORIZED: 401,          // The client must authenticate itself to get the requested response
    FORBIDDEN: 403,             // The client does not have access rights to the content
    NOT_FOUND: 404,             // The server can not find the requested resource
    METHOD_NOT_ALLOWED: 405,    // The method specified in the request is not allowed
    CONFLICT: 409,              // The request conflicts with the current state of the server
    UNPROCESSABLE_ENTITY: 422,  // The server understands the content type of the request but was unable to process the contained instructions
    TOO_MANY_REQUESTS: 429,     // The user has sent too many requests in a given amount of time ("rate limiting")
    INTERNAL_ERROR: 500,        // The server has encountered a situation it doesn't know how to handle
    NOT_IMPLEMENTED: 501,       // The request method is not supported by the server and cannot be handled
    BAD_GATEWAY: 502,           // The server was acting as a gateway or proxy and received an invalid response from the upstream server
    SERVICE_UNAVAILABLE: 503,   // The server is not ready to handle the request
    GATEWAY_TIMEOUT: 504        // The server was acting as a gateway or proxy and did not receive a timely response from the upstream server
}