import useTextStyles from './use-text-styles';
var TextStyles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = useTextStyles(styleNames !== null && styleNames !== void 0 ? styleNames : [], styleNamespace);
    return children(style);
};
export default TextStyles;
//# sourceMappingURL=text-styles.js.map