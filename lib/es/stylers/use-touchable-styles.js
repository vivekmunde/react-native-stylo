import useStyles from './use-styles';
function useTouchableStyles(styleNames, styleNamespace) {
    return useStyles({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'TouchableStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export default useTouchableStyles;
//# sourceMappingURL=use-touchable-styles.js.map