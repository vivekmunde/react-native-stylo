import useStyles from './use-styles';
export function useScrollViewStyles(styleNames, styleNamespace) {
    return useStyles({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'ScrollViewStyles',
        styleNames: styleNames,
    });
}
export function useScrollViewContentContainerStyles(styleNames, styleNamespace) {
    return useStyles({
        styleNamespace: styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'ScrollViewContentContainerStyles',
        styleNames: styleNames,
    });
}
//# sourceMappingURL=use-scroll-view-styles.js.map