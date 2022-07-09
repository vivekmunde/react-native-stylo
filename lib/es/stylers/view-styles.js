import useViewStyles from './use-view-styles';
var ViewStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = useViewStyles(styleNames);
    return children(style);
};
export default ViewStyles;
//# sourceMappingURL=view-styles.js.map