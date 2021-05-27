import { ErrorHandler } from './error-handler';
import { Token } from './token';
export interface Position {
    line: number;
    column: number;
}
export interface SourceLocation {
    start: Position;
    end: Position;
    source?: string;
}
export interface Comment {
    multiLine: boolean;
    slice: number[];
    range: [number, number];
    loc: SourceLocation;
}
declare type NotEscapeSequenceHead = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'x' | 'u';
export interface RawToken {
    type: Token;
    value: string | number;
    pattern?: string;
    flags?: string;
    regex?: RegExp | null;
    octal?: boolean;
    cooked?: string | null;
    notEscapeSequenceHead?: NotEscapeSequenceHead | null;
    head?: boolean;
    tail?: boolean;
    lineNumber: number;
    lineStart: number;
    start: number;
    end: number;
}
interface ScannerState {
    index: number;
    lineNumber: number;
    lineStart: number;
    curlyStack: string[];
}
export declare class Scanner {
    readonly source: string;
    readonly errorHandler: ErrorHandler;
    trackComment: boolean;
    isModule: boolean;
    index: number;
    lineNumber: number;
    lineStart: number;
    curlyStack: string[];
    private readonly length;
    constructor(code: string, handler: ErrorHandler);
    saveState(): ScannerState;
    restoreState(state: ScannerState): void;
    eof(): boolean;
    throwUnexpectedToken(message?: string): never;
    private tolerateUnexpectedToken;
    private skipSingleLineComment;
    private skipMultiLineComment;
    scanComments(): any;
    isFutureReservedWord(id: string): boolean;
    isStrictModeReservedWord(id: string): boolean;
    isRestrictedWord(id: string): boolean;
    private isKeyword;
    private codePointAt;
    private scanHexEscape;
    private tryToScanUnicodeCodePointEscape;
    private scanUnicodeCodePointEscape;
    private getIdentifier;
    private getComplexIdentifier;
    private octalToDecimal;
    private scanIdentifier;
    private scanPunctuator;
    private scanHexLiteral;
    private scanBinaryLiteral;
    private scanOctalLiteral;
    private isImplicitOctalLiteral;
    private scanNumericLiteral;
    private scanStringLiteral;
    private scanTemplate;
    private testRegExp;
    private scanRegExpBody;
    private scanRegExpFlags;
    scanRegExp(): RawToken;
    lex(): RawToken;
}
export {};
