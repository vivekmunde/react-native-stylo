import { useScrollViewContentContainerStyles, useScrollViewStyles, } from './use-scroll-view-styles';
export var ScrollViewStyles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = useScrollViewStyles(styleNames, styleNamespace);
    return children(style);
};
export var ScrollViewContentContainerStyles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = useScrollViewContentContainerStyles(styleNames, styleNamespace);
    return children(style);
};
//# sourceMappingURL=scroll-view-styles.js.map