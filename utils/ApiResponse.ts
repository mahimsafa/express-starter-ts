class ApiResponse {
    constructor(
        statusCode: number = 200,
        // @ts-expect-error data type is not consistant always
        data,
        message: string = 'Success',
        metadata: object = {},
        error: string = ''
    ) {
        // @ts-expect-error not important
        this.statusCode = statusCode;
        // @ts-expect-error data type is not consistant always
        this.data = data;
        // @ts-expect-error not important
        this.message = message;
        // @ts-expect-error not important
        this.metadata = metadata;
        // @ts-expect-error not important
        this.success = statusCode < 400;
        if (error) {
            // @ts-expect-error not important
            this.error = error;
        }
    }
}

export { ApiResponse };
