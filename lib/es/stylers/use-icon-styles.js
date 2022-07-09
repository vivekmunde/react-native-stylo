import useStyles from './use-styles';
function useIconStyles(styleNames) {
    return useStyles({
        styleNamespace: 'IconStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export default useIconStyles;
//# sourceMappingURL=use-icon-styles.js.map