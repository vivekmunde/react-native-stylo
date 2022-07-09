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
import RNVIconAntDesign from 'react-native-vector-icons/AntDesign';
import RNVIconEntypo from 'react-native-vector-icons/Entypo';
import RNVIconEvilIcons from 'react-native-vector-icons/EvilIcons';
import RNVIconFontAwesome from 'react-native-vector-icons/FontAwesome';
import RNVIconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RNVIconFontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import RNVIconFontisto from 'react-native-vector-icons/Fontisto';
import RNVIconFoundation from 'react-native-vector-icons/Foundation';
import RNVIconIonicons from 'react-native-vector-icons/Ionicons';
import RNVIconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNVIconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNVIconOcticons from 'react-native-vector-icons/Octicons';
import RNVIconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import RNVIconZocial from 'react-native-vector-icons/Zocial';
import { useIconStyles } from '../stylers';
var AntDesign = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconAntDesign {...props} style={[textStyle, style]}/>;
};
var Entypo = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconEntypo {...props} style={[textStyle, style]}/>;
};
var EvilIcons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconEvilIcons {...props} style={[textStyle, style]}/>;
};
var FontAwesome = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconFontAwesome {...props} style={[textStyle, style]}/>;
};
var FontAwesome5 = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconFontAwesome5 {...props} style={[textStyle, style]}/>;
};
var FontAwesome5Pro = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconFontAwesome5Pro {...props} style={[textStyle, style]}/>;
};
var Fontisto = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconFontisto {...props} style={[textStyle, style]}/>;
};
var Foundation = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconFoundation {...props} style={[textStyle, style]}/>;
};
var Ionicons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconIonicons {...props} style={[textStyle, style]}/>;
};
var MaterialCommunityIcons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return (<RNVIconMaterialCommunityIcons {...props} style={[textStyle, style]}/>);
};
var MaterialIcons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconMaterialIcons {...props} style={[textStyle, style]}/>;
};
var Octicons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconOcticons {...props} style={[textStyle, style]}/>;
};
var SimpleLineIcons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconSimpleLineIcons {...props} style={[textStyle, style]}/>;
};
var Zocial = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = useIconStyles(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <RNVIconZocial {...props} style={[textStyle, style]}/>;
};
var Icon = /** @class */ (function () {
    function Icon() {
    }
    return Icon;
}());
Icon.AntDesign = AntDesign;
Icon.Entypo = Entypo;
Icon.EvilIcons = EvilIcons;
Icon.FontAwesome = FontAwesome;
Icon.FontAwesome5 = FontAwesome5;
Icon.FontAwesome5Pro = FontAwesome5Pro;
Icon.Fontisto = Fontisto;
Icon.Foundation = Foundation;
Icon.Ionicons = Ionicons;
Icon.MaterialCommunityIcons = MaterialCommunityIcons;
Icon.MaterialIcons = MaterialIcons;
Icon.Octicons = Octicons;
Icon.SimpleLineIcons = SimpleLineIcons;
Icon.Zocial = Zocial;
export default Icon;
//# sourceMappingURL=icon.js.map