"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_image_styles_1 = __importDefault(require("./use-image-styles"));
var ImageStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = (0, use_image_styles_1.default)(styleNames);
    return children(style);
};
exports.default = ImageStyles;
//# sourceMappingURL=image-styles.js.map