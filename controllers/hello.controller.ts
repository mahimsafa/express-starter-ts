import { Request, Response } from 'express';
import { ApiResponse, ApiError, asyncHandler } from '@/utils';

export const helloWorld = asyncHandler(async (req: Request, res: Response) => {
    return res.status(200).json(
        new ApiResponse(200, {
            message: 'Hello World! 🎉'
        })
    );
});
