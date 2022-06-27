"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var theme_context_1 = __importDefault(require("../theme-context"));
function useStyles(_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames;
    var themeContext = (0, react_1.useContext)(theme_context_1.default);
    var styleNamesJoined = styleNames === null || styleNames === void 0 ? void 0 : styleNames.join('');
    var style = (0, react_1.useMemo)(function () {
        var _a;
        var styles = styleNamespace
            ? themeContext.styles[styleNamespace]
            : themeContext.styles;
        return (styleNames !== null && styleNames !== void 0 ? styleNames : []).reduce(function (acc, styleName) { return (__assign(__assign({}, acc), (styles !== null && styles !== void 0 ? styles : {})[styleName])); }, __assign({}, ((_a = styles === null || styles === void 0 ? void 0 : styles.Default) !== null && _a !== void 0 ? _a : {})));
    }, [themeContext.styles, styleNamespace, styleNamesJoined]);
    return style;
}
exports.default = useStyles;
//# sourceMappingURL=use-styles.js.map