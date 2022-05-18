import useStyles from './use-styles';
function useIconStyles(styleNames, styleNamespace) {
    return useStyles({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'IconStyles',
        styleNames: styleNames,
    });
}
export default useIconStyles;
//# sourceMappingURL=use-icon-styles.js.map