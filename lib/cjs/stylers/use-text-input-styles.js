"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_styles_1 = __importDefault(require("./use-styles"));
function useImageStyles(styleNames) {
    return (0, use_styles_1.default)({
        styleNamespace: 'TextInputStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
exports.default = useImageStyles;
//# sourceMappingURL=use-text-input-styles.js.map