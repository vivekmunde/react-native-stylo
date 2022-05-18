var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Text } from 'react-native';
import { useTextStyles } from '../stylers';
var RNSText = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNamespace", "styleNames", "style"]);
    var textStyle = useTextStyles(styleNames, styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'TextStyles');
    return <Text {...props} style={[textStyle, style]}/>;
};
export default RNSText;
//# sourceMappingURL=text.js.map