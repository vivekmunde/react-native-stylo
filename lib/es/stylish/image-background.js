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
import { ImageBackground } from 'react-native';
import { useImageBackgroundStyles } from '../stylers';
var RNSImageBackground = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var imageBackgroundStyle = useImageBackgroundStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <ImageBackground {...props} style={style ? [imageBackgroundStyle, style] : imageBackgroundStyle}/>;
};
export default RNSImageBackground;
//# sourceMappingURL=image-background.js.map