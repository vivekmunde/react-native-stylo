import useStyles from './use-styles';
function useTouchableStyles(styleNames) {
    return useStyles({
        styleNamespace: 'TouchableStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export default useTouchableStyles;
//# sourceMappingURL=use-touchable-styles.js.map