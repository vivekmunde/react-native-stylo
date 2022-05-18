"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_image_background_styles_1 = __importDefault(require("./use-image-background-styles"));
var ImageBackgroundViewStyles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = (0, use_image_background_styles_1.default)(styleNames, styleNamespace);
    return children(style);
};
exports.default = ImageBackgroundViewStyles;
//# sourceMappingURL=image-background-styles.js.map