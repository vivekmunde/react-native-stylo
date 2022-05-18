import useStyles from './use-styles';
function useViewStyles(styleNames, styleNamespace) {
    return useStyles({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'ViewStyles',
        styleNames: styleNames,
    });
}
export default useViewStyles;
//# sourceMappingURL=use-view-styles.js.map