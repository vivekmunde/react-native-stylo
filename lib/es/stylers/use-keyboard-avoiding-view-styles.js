import useStyles from './use-styles';
function useKeyboardAvoidingViewStyles(styleNames, styleNamespace) {
    return useStyles({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'KeyboardAvoidingViewStyles',
        styleNames: styleNames,
    });
}
export default useKeyboardAvoidingViewStyles;
//# sourceMappingURL=use-keyboard-avoiding-view-styles.js.map