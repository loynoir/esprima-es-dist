export declare const Character: {
    fromCodePoint(cp: number): string;
    isWhiteSpace(cp: number): boolean;
    isLineTerminator(cp: number): boolean;
    isIdentifierStart(cp: number): boolean;
    isIdentifierPart(cp: number): boolean;
    isDecimalDigit(cp: number): boolean;
    isDecimalDigitChar(ch: string): ch is "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
    isHexDigit(cp: number): boolean;
    isOctalDigit(cp: number): boolean;
};
