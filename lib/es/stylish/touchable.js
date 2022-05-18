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
import { Pressable as RNPressable, TouchableHighlight as RNTouchableHighlight, TouchableOpacity as RNTouchableOpacity, } from 'react-native';
import { useTouchableStyles } from '../stylers';
export var Pressable = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNamespace", "styleNames", "style"]);
    var viewStyle = useTouchableStyles(styleNames, styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'TouchableStyles');
    var pressableFunctionStyle = typeof style === 'function'
        ? function (args) { return style(args); }
        : undefined;
    return (<RNPressable {...props} style={[
            viewStyle,
            pressableFunctionStyle !== undefined
                ? pressableFunctionStyle
                : style,
        ]}/>);
};
export var TouchableHighlight = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNamespace", "styleNames", "style"]);
    var viewStyle = useTouchableStyles(styleNames, styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'TouchableStyles');
    return <RNTouchableHighlight {...props} style={[viewStyle, style]}/>;
};
export var TouchableOpacity = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNamespace", "styleNames", "style"]);
    var viewStyle = useTouchableStyles(styleNames, styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'TouchableStyles');
    return <RNTouchableOpacity {...props} style={[viewStyle, style]}/>;
};
//# sourceMappingURL=touchable.js.map