import useImageStyles from './use-image-styles';
var ImageStyles = function (_a) {
    var styleNames = _a.styleNames, children = _a.children;
    var style = useImageStyles(styleNames);
    return children(style);
};
export default ImageStyles;
//# sourceMappingURL=image-styles.js.map