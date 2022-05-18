import useImageStyles from './use-image-styles';
var ImageStyles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = useImageStyles(styleNames, styleNamespace);
    return children(style);
};
export default ImageStyles;
//# sourceMappingURL=image-styles.js.map