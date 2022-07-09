import useStyles from './use-styles';
function useImageStyles(styleNames) {
    return useStyles({
        styleNamespace: 'TextInputStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export default useImageStyles;
//# sourceMappingURL=use-text-input-styles.js.map