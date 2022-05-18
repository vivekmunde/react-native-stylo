import useIconStyles from './use-icon-styles';
var IconStyles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = useIconStyles(styleNames, styleNamespace);
    return children(style);
};
export default IconStyles;
//# sourceMappingURL=icon-styles.js.map