import * as Node from './nodes';
export declare type JSXAttributeName = JSXIdentifier | JSXNamespacedName;
export declare type JSXAttributeValue = Node.Literal | JSXElement | JSXSpreadAttribute | JSXExpressionContainer;
export declare type JSXChild = JSXElement | JSXExpressionContainer | JSXText;
export declare type JSXElementAttribute = JSXAttribute | JSXSpreadAttribute;
export declare type JSXElementName = JSXIdentifier | JSXNamespacedName | JSXMemberExpression;
export declare class JSXClosingElement {
    readonly type: string;
    readonly name: JSXElementName;
    constructor(name: JSXElementName);
}
export declare class JSXClosingFragment {
    readonly type: string;
    constructor();
}
export declare class JSXElement {
    readonly type: string;
    readonly openingElement: JSXOpeningElement | JSXOpeningFragment;
    readonly children: JSXChild[];
    readonly closingElement: JSXClosingElement | JSXClosingFragment | null;
    constructor(openingElement: JSXOpeningElement | JSXOpeningFragment, children: JSXChild[], closingElement: JSXClosingElement | JSXClosingFragment | null);
}
export declare class JSXEmptyExpression {
    readonly type: string;
    constructor();
}
export declare class JSXExpressionContainer {
    readonly type: string;
    readonly expression: Node.Expression | JSXEmptyExpression;
    constructor(expression: Node.Expression | JSXEmptyExpression);
}
export declare class JSXIdentifier {
    readonly type: string;
    readonly name: string;
    constructor(name: string);
}
export declare class JSXMemberExpression {
    readonly type: string;
    readonly object: JSXMemberExpression | JSXIdentifier;
    readonly property: JSXIdentifier;
    constructor(object: JSXMemberExpression | JSXIdentifier, property: JSXIdentifier);
}
export declare class JSXAttribute {
    readonly type: string;
    readonly name: JSXAttributeName;
    readonly value: JSXAttributeValue | null;
    constructor(name: JSXAttributeName, value: JSXAttributeValue | null);
}
export declare class JSXNamespacedName {
    readonly type: string;
    readonly namespace: JSXIdentifier;
    readonly name: JSXIdentifier;
    constructor(namespace: JSXIdentifier, name: JSXIdentifier);
}
export declare class JSXOpeningElement {
    readonly type: string;
    readonly name: JSXElementName;
    readonly selfClosing: boolean;
    readonly attributes: JSXElementAttribute[];
    constructor(name: JSXElementName, selfClosing: boolean, attributes: JSXElementAttribute[]);
}
export declare class JSXOpeningFragment {
    readonly type: string;
    readonly selfClosing: boolean;
    constructor(selfClosing: boolean);
}
export declare class JSXSpreadAttribute {
    readonly type: string;
    readonly argument: Node.Expression;
    constructor(argument: Node.Expression);
}
export declare class JSXText {
    readonly type: string;
    readonly value: string;
    readonly raw: string;
    constructor(value: string, raw: string);
}
