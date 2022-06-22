import useStyles from './use-styles';
function useSafeAreaViewStyles(styleNames, styleNamespace) {
    return useStyles({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'SafeAreaViewStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export default useSafeAreaViewStyles;
//# sourceMappingURL=use-safe-area-view-styles.js.map