import useSafeAreaViewStyles from './use-safe-area-view-styles';
var SafeAreaViewStyles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = useSafeAreaViewStyles(styleNames, styleNamespace);
    return children(style);
};
export default SafeAreaViewStyles;
//# sourceMappingURL=safe-area-view-styles.js.map