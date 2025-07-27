class ApiError extends Error {
    constructor(
        statusCode: number,
        message: string = 'Unable to complete the operation',
        errors: string = '',
        stack: string = ''
    ) {
        super(message);
        // @ts-expect-error this is not needed
        this.statusCode = statusCode;
        // @ts-expect-error this is not needed
        this.data = null;
        this.message = message;
        // @ts-expect-error this is not needed
        this.success = false;
        // @ts-expect-error this is not needed
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
