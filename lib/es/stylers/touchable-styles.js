import useTouchableStyles from './use-touchable-styles';
var TouchableStyles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = useTouchableStyles(styleNames, styleNamespace);
    return children(style);
};
export default TouchableStyles;
//# sourceMappingURL=touchable-styles.js.map