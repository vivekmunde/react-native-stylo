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
import { ScrollView } from 'react-native';
import { useScrollViewContentContainerStyles, useScrollViewStyles, } from '../stylers';
var RNSScrollView = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, style = _a.style, contentContainerStyleNamespace = _a.contentContainerStyleNamespace, contentContainerStyleNames = _a.contentContainerStyleNames, contentContainerStyle = _a.contentContainerStyle, props = __rest(_a, ["styleNamespace", "styleNames", "style", "contentContainerStyleNamespace", "contentContainerStyleNames", "contentContainerStyle"]);
    var scrollViewStyle = useScrollViewStyles(styleNames !== null && styleNames !== void 0 ? styleNames : [], styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'ScrollViewStyles');
    var scrollViewContentContainerStyle = useScrollViewContentContainerStyles(contentContainerStyleNames !== null && contentContainerStyleNames !== void 0 ? contentContainerStyleNames : [], contentContainerStyleNamespace !== null && contentContainerStyleNamespace !== void 0 ? contentContainerStyleNamespace : 'ScrollViewContentContainerStyles');
    return (<ScrollView {...props} style={[scrollViewStyle, style]} contentContainerStyle={[
            scrollViewContentContainerStyle,
            contentContainerStyle,
        ]}/>);
};
export default RNSScrollView;
//# sourceMappingURL=scroll-view.js.map