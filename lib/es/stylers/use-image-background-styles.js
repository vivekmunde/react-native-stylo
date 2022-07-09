import useStyles from './use-styles';
function useImageBackgroundStyles(styleNames) {
    return useStyles({
        styleNamespace: 'ImageBackgroundStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export default useImageBackgroundStyles;
//# sourceMappingURL=use-image-background-styles.js.map