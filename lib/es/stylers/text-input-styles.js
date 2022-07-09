import useTextInputStyles from './use-text-input-styles';
var TextInputStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = useTextInputStyles(styleNames);
    return children(style);
};
export default TextInputStyles;
//# sourceMappingURL=text-input-styles.js.map