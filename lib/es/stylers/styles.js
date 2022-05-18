import useStyles from './use-styles';
var Styles = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, children = _a.children;
    var style = useStyles({
        styleNamespace: styleNamespace,
        styleNames: styleNames,
    });
    return children(style);
};
export default Styles;
//# sourceMappingURL=styles.js.map