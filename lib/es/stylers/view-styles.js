import useViewStyles from './use-view-styles';
var ViewStyles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = useViewStyles(styleNames, styleNamespace);
    return children(style);
};
export default ViewStyles;
//# sourceMappingURL=view-styles.js.map