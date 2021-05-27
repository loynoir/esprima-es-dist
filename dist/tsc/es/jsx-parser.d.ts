import * as JSXNode from './jsx-nodes';
import * as Node from './nodes';
import { Marker, Parser } from './parser';
import { Token } from './token';
interface MetaJSXElement {
    node: Marker;
    opening: JSXNode.JSXOpeningElement | JSXNode.JSXOpeningFragment;
    closing: JSXNode.JSXClosingElement | JSXNode.JSXClosingFragment | null;
    children: JSXNode.JSXChild[];
}
declare const enum JSXToken {
    Identifier = 100,
    Text = 101
}
interface RawJSXToken {
    type: Token | JSXToken;
    value: string;
    lineNumber: number;
    lineStart: number;
    start: number;
    end: number;
}
export declare class JSXParser extends Parser {
    constructor(code: string, options: any, delegate: any);
    parsePrimaryExpression(): Node.Expression | JSXNode.JSXElement;
    startJSX(): void;
    finishJSX(): void;
    reenterJSX(): void;
    createJSXNode(): Marker;
    createJSXChildNode(): Marker;
    scanXHTMLEntity(quote: string): string;
    lexJSX(): RawJSXToken;
    nextJSXToken(): RawJSXToken;
    nextJSXText(): RawJSXToken;
    peekJSXToken(): RawJSXToken;
    expectJSX(value: any): void;
    matchJSX(value: any): boolean;
    parseJSXIdentifier(): JSXNode.JSXIdentifier;
    parseJSXElementName(): JSXNode.JSXElementName;
    parseJSXAttributeName(): JSXNode.JSXAttributeName;
    parseJSXStringLiteralAttribute(): Node.Literal;
    parseJSXExpressionAttribute(): JSXNode.JSXExpressionContainer;
    parseJSXAttributeValue(): JSXNode.JSXAttributeValue;
    parseJSXNameValueAttribute(): JSXNode.JSXAttribute;
    parseJSXSpreadAttribute(): JSXNode.JSXSpreadAttribute;
    parseJSXAttributes(): JSXNode.JSXElementAttribute[];
    parseJSXOpeningElement(): JSXNode.JSXOpeningElement | JSXNode.JSXOpeningFragment;
    parseJSXBoundaryElement(): JSXNode.JSXOpeningElement | JSXNode.JSXClosingElement | JSXNode.JSXOpeningFragment | JSXNode.JSXClosingFragment;
    parseJSXEmptyExpression(): JSXNode.JSXEmptyExpression;
    parseJSXExpressionContainer(): JSXNode.JSXExpressionContainer;
    parseJSXChildren(): JSXNode.JSXChild[];
    parseComplexJSXElement(el: MetaJSXElement): MetaJSXElement;
    parseJSXElement(): JSXNode.JSXElement;
    parseJSXRoot(): JSXNode.JSXElement;
    isStartOfExpression(): boolean;
}
export {};
