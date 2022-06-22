"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollViewContentContainerStyles = exports.useScrollViewStyles = void 0;
var use_styles_1 = __importDefault(require("./use-styles"));
function useScrollViewStyles(styleNames, styleNamespace) {
    return (0, use_styles_1.default)({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'ScrollViewStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
exports.useScrollViewStyles = useScrollViewStyles;
function useScrollViewContentContainerStyles(styleNames, styleNamespace) {
    return (0, use_styles_1.default)({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'ScrollViewContentContainerStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
exports.useScrollViewContentContainerStyles = useScrollViewContentContainerStyles;
//# sourceMappingURL=use-scroll-view-styles.js.map