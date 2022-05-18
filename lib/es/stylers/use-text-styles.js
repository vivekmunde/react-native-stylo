import useStyles from './use-styles';
function useTextStyles(styleNames, styleNamespace) {
    return useStyles({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'TextStyles',
        styleNames: styleNames,
    });
}
export default useTextStyles;
//# sourceMappingURL=use-text-styles.js.map