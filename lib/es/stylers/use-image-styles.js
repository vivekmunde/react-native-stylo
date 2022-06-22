import useStyles from './use-styles';
function useImageStyles(styleNames, styleNamespace) {
    return useStyles({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'ImageStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export default useImageStyles;
//# sourceMappingURL=use-image-styles.js.map