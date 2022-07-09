import useStyles from './use-styles';
function useImageStyles(styleNames) {
    return useStyles({
        styleNamespace: 'ImageStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export default useImageStyles;
//# sourceMappingURL=use-image-styles.js.map