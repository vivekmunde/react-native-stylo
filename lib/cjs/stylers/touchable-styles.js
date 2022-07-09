"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_touchable_styles_1 = __importDefault(require("./use-touchable-styles"));
var TouchableStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = (0, use_touchable_styles_1.default)(styleNames);
    return children(style);
};
exports.default = TouchableStyles;
//# sourceMappingURL=touchable-styles.js.map