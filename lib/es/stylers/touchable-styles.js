import useTouchableStyles from './use-touchable-styles';
var TouchableStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = useTouchableStyles(styleNames);
    return children(style);
};
export default TouchableStyles;
//# sourceMappingURL=touchable-styles.js.map