import { useScrollViewContentContainerStyles, useScrollViewStyles, } from './use-scroll-view-styles';
export var ScrollViewStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = useScrollViewStyles(styleNames);
    return children(style);
};
export var ScrollViewContentContainerStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = useScrollViewContentContainerStyles(styleNames);
    return children(style);
};
//# sourceMappingURL=scroll-view-styles.js.map