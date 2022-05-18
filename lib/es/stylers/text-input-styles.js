import useTextInputStyles from './use-text-input-styles';
var TextInputStyles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = useTextInputStyles(styleNames, styleNamespace);
    return children(style);
};
export default TextInputStyles;
//# sourceMappingURL=text-input-styles.js.map