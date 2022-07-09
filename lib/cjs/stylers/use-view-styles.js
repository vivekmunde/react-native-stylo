"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_styles_1 = __importDefault(require("./use-styles"));
function useViewStyles(styleNames) {
    return (0, use_styles_1.default)({
        styleNamespace: 'ViewStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
exports.default = useViewStyles;
//# sourceMappingURL=use-view-styles.js.map