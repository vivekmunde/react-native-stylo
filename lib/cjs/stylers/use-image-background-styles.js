"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_styles_1 = __importDefault(require("./use-styles"));
function useImageBackgroundStyles(styleNames) {
    return (0, use_styles_1.default)({
        styleNamespace: 'ImageBackgroundStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
exports.default = useImageBackgroundStyles;
//# sourceMappingURL=use-image-background-styles.js.map