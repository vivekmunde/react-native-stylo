"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_styles_1 = __importDefault(require("./use-styles"));
function useViewStyles(styleNames, styleNamespace) {
    return (0, use_styles_1.default)({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'ViewStyles',
        styleNames: styleNames,
    });
}
exports.default = useViewStyles;
//# sourceMappingURL=use-view-styles.js.map