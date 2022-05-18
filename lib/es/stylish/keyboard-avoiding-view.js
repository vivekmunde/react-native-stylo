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
import { KeyboardAvoidingView } from 'react-native';
import { useKeyboardAvoidingViewStyles } from '../stylers';
var RNSKeyboardAvoidingView = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNamespace", "styleNames", "style"]);
    var keyboardAvoidingViewStyle = useKeyboardAvoidingViewStyles(styleNames, styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'KeyboardAvoidingViewStyles');
    return (<KeyboardAvoidingView {...props} style={[keyboardAvoidingViewStyle, style]}/>);
};
export default RNSKeyboardAvoidingView;
//# sourceMappingURL=keyboard-avoiding-view.js.map