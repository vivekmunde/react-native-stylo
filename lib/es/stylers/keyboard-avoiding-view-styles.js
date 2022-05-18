import useKeyboardAvoidingViewStyles from './use-keyboard-avoiding-view-styles';
var KeyboardAvoidingViewStyles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = useKeyboardAvoidingViewStyles(styleNames, styleNamespace);
    return children(style);
};
export default KeyboardAvoidingViewStyles;
//# sourceMappingURL=keyboard-avoiding-view-styles.js.map