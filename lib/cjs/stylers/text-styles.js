"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_text_styles_1 = __importDefault(require("./use-text-styles"));
var TextStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = (0, use_text_styles_1.default)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return children(style);
};
exports.default = TextStyles;
//# sourceMappingURL=text-styles.js.map