import useStyles from './use-styles';
function useImageBackgroundStyles(styleNames, styleNamespace) {
    return useStyles({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'ImageBackgroundStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export default useImageBackgroundStyles;
//# sourceMappingURL=use-image-background-styles.js.map