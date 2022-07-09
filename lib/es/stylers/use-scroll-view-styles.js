import useStyles from './use-styles';
export function useScrollViewStyles(styleNames) {
    return useStyles({
        styleNamespace: 'ScrollViewStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
export function useScrollViewContentContainerStyles(styleNames) {
    return useStyles({
        styleNamespace: 'ScrollViewContentContainerStyles',
        styleNames: styleNames !== null && styleNames !== void 0 ? styleNames : [],
    });
}
//# sourceMappingURL=use-scroll-view-styles.js.map