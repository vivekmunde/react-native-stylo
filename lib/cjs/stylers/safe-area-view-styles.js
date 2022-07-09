"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_safe_area_view_styles_1 = __importDefault(require("./use-safe-area-view-styles"));
var SafeAreaViewStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = (0, use_safe_area_view_styles_1.default)(styleNames);
    return children(style);
};
exports.default = SafeAreaViewStyles;
//# sourceMappingURL=safe-area-view-styles.js.map