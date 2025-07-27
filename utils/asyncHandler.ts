import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from './ApiResponse';

const asyncHandler = (requestHandler: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => {
            return res
                .status(err.statusCode)
                .json(
                    new ApiResponse(
                        err.statusCode,
                        null,
                        err.message,
                        err.errors
                    )
                );
        });
    };
};

export { asyncHandler };
