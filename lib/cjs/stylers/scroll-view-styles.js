"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollViewContentContainerStyles = exports.ScrollViewStyles = void 0;
var use_scroll_view_styles_1 = require("./use-scroll-view-styles");
var ScrollViewStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = (0, use_scroll_view_styles_1.useScrollViewStyles)(styleNames);
    return children(style);
};
exports.ScrollViewStyles = ScrollViewStyles;
var ScrollViewContentContainerStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = (0, use_scroll_view_styles_1.useScrollViewContentContainerStyles)(styleNames);
    return children(style);
};
exports.ScrollViewContentContainerStyles = ScrollViewContentContainerStyles;
//# sourceMappingURL=scroll-view-styles.js.map