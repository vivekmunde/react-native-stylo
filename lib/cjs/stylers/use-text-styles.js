"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_styles_1 = __importDefault(require("./use-styles"));
function useTextStyles(styleNames) {
    return (0, use_styles_1.default)({
        styleNamespace: 'TextStyles',
        styleNames: styleNames,
    });
}
exports.default = useTextStyles;
//# sourceMappingURL=use-text-styles.js.map