var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useContext, useMemo } from 'react';
import ThemeContext from './theme-context';
function useStyles(_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames;
    var themeContext = useContext(ThemeContext);
    var styleNamesJoined = styleNames === null || styleNames === void 0 ? void 0 : styleNames.join('');
    var style = useMemo(function () {
        var _a;
        var styles = styleNamespace
            ? themeContext.styles[styleNamespace]
            : themeContext.styles;
        return (styleNames !== null && styleNames !== void 0 ? styleNames : []).reduce(function (acc, styleName) { return (__assign(__assign({}, acc), (styles !== null && styles !== void 0 ? styles : {})[styleName])); }, __assign({}, ((_a = styles === null || styles === void 0 ? void 0 : styles.Default) !== null && _a !== void 0 ? _a : {})));
    }, [themeContext.styles, styleNamespace, styleNamesJoined]);
    return style;
}
export default useStyles;
//# sourceMappingURL=use-styles.js.map