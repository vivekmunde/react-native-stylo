import useStyles from './use-styles';
function useViewStyles(styleNames) {
    return useStyles({
        styleNamespace: 'ViewStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export default useViewStyles;
//# sourceMappingURL=use-view-styles.js.map