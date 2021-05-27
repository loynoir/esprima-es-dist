import { ErrorHandler } from './error-handler';
import { Scanner, SourceLocation } from './scanner';
declare type ReaderEntry = string | null;
interface BufferEntry {
    type: string;
    value: string;
    regex?: {
        pattern: string;
        flags: string;
    };
    range?: [number, number];
    loc?: SourceLocation;
}
declare class Reader {
    readonly values: ReaderEntry[];
    curly: number;
    paren: number;
    constructor();
    beforeFunctionExpression(t: string): boolean;
    isRegexStart(): boolean;
    push(token: any): void;
}
interface Config {
    tolerant?: boolean;
    comment?: boolean;
    range?: boolean;
    loc?: boolean;
}
export declare class Tokenizer {
    readonly errorHandler: ErrorHandler;
    scanner: Scanner;
    readonly trackRange: boolean;
    readonly trackLoc: boolean;
    readonly buffer: BufferEntry[];
    readonly reader: Reader;
    constructor(code: string, config: Config);
    errors(): import("./error-handler").EsprimaError[];
    getNextToken(): BufferEntry | undefined;
}
export {};
