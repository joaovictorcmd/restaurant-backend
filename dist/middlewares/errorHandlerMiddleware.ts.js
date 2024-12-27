"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = errorHandlerMiddleware;
function errorHandlerMiddleware(error, req, res, next) {
    if (error instanceof Error) {
        return res.status(400).json({
            error: error.message,
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
}
