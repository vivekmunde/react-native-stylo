"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var stylers_1 = require("../stylers");
var RNSScrollView = function (_a) {
    var styleNamespace = _a.styleNamespace, styleNames = _a.styleNames, style = _a.style, contentContainerStyleNamespace = _a.contentContainerStyleNamespace, contentContainerStyleNames = _a.contentContainerStyleNames, contentContainerStyle = _a.contentContainerStyle, props = __rest(_a, ["styleNamespace", "styleNames", "style", "contentContainerStyleNamespace", "contentContainerStyleNames", "contentContainerStyle"]);
    var scrollViewStyle = (0, stylers_1.useScrollViewStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : [], styleNamespace !== null && styleNamespace !== void 0 ? styleNamespace : 'ScrollViewStyles');
    var scrollViewContentContainerStyle = (0, stylers_1.useScrollViewContentContainerStyles)(contentContainerStyleNames !== null && contentContainerStyleNames !== void 0 ? contentContainerStyleNames : [], contentContainerStyleNamespace !== null && contentContainerStyleNamespace !== void 0 ? contentContainerStyleNamespace : 'ScrollViewContentContainerStyles');
    return (<react_native_1.ScrollView {...props} style={[scrollViewStyle, style]} contentContainerStyle={[
            scrollViewContentContainerStyle,
            contentContainerStyle,
        ]}/>);
};
exports.default = RNSScrollView;
//# sourceMappingURL=scroll-view.js.map