"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var theme_context_1 = __importDefault(require("../theme-context"));
function useStyle(styleNamespace, styleName) {
    var themeContext = (0, react_1.useContext)(theme_context_1.default);
    var styles = styleNamespace
        ? themeContext.styles[styleNamespace]
        : themeContext.styles;
    var style = styles[styleName];
    return style ? style : undefined;
}
exports.default = useStyle;
//# sourceMappingURL=use-style.js.map