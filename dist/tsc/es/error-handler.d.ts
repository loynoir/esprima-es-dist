export interface EsprimaError extends Error {
    name: string;
    message: string;
    index: number;
    lineNumber: number;
    column: number;
    description: string;
}
export declare class ErrorHandler {
    readonly errors: EsprimaError[];
    tolerant: boolean;
    constructor();
    recordError(error: EsprimaError): void;
    tolerate(error: EsprimaError): void;
    constructError(msg: string, column: number): Error;
    createError(index: number, line: number, col: number, description: string): EsprimaError;
    throwError(index: number, line: number, col: number, description: string): never;
    tolerateError(index: number, line: number, col: number, description: string): void;
}
