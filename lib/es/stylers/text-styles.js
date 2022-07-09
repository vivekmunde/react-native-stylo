import useTextStyles from './use-text-styles';
var TextStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = useTextStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return children(style);
};
export default TextStyles;
//# sourceMappingURL=text-styles.js.map