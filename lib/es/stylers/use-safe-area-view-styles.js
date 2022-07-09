import useStyles from './use-styles';
function useSafeAreaViewStyles(styleNames) {
    return useStyles({
        styleNamespace: 'SafeAreaViewStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export default useSafeAreaViewStyles;
//# sourceMappingURL=use-safe-area-view-styles.js.map