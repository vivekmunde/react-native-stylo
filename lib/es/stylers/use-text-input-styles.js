import useStyles from './use-styles';
function useImageStyles(styleNames, styleNamespace) {
    return useStyles({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'TextInputStyles',
        styleNames: styleNames,
    });
}
export default useImageStyles;
//# sourceMappingURL=use-text-input-styles.js.map