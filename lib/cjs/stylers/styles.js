"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_styles_1 = __importDefault(require("./use-styles"));
var Styles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = (0, use_styles_1.default)({
        styleNamespace: styleNamespace,
        styleNames: styleNames,
    });
    return children(style);
};
exports.default = Styles;
//# sourceMappingURL=styles.js.map