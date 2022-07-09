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
var AntDesign_1 = __importDefault(require("react-native-vector-icons/AntDesign"));
var Entypo_1 = __importDefault(require("react-native-vector-icons/Entypo"));
var EvilIcons_1 = __importDefault(require("react-native-vector-icons/EvilIcons"));
var FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
var FontAwesome5_1 = __importDefault(require("react-native-vector-icons/FontAwesome5"));
var FontAwesome5Pro_1 = __importDefault(require("react-native-vector-icons/FontAwesome5Pro"));
var Fontisto_1 = __importDefault(require("react-native-vector-icons/Fontisto"));
var Foundation_1 = __importDefault(require("react-native-vector-icons/Foundation"));
var Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
var MaterialCommunityIcons_1 = __importDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
var Octicons_1 = __importDefault(require("react-native-vector-icons/Octicons"));
var SimpleLineIcons_1 = __importDefault(require("react-native-vector-icons/SimpleLineIcons"));
var Zocial_1 = __importDefault(require("react-native-vector-icons/Zocial"));
var stylers_1 = require("../stylers");
var AntDesign = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <AntDesign_1.default {...props} style={[textStyle, style]}/>;
};
var Entypo = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <Entypo_1.default {...props} style={[textStyle, style]}/>;
};
var EvilIcons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <EvilIcons_1.default {...props} style={[textStyle, style]}/>;
};
var FontAwesome = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <FontAwesome_1.default {...props} style={[textStyle, style]}/>;
};
var FontAwesome5 = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <FontAwesome5_1.default {...props} style={[textStyle, style]}/>;
};
var FontAwesome5Pro = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <FontAwesome5Pro_1.default {...props} style={[textStyle, style]}/>;
};
var Fontisto = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <Fontisto_1.default {...props} style={[textStyle, style]}/>;
};
var Foundation = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <Foundation_1.default {...props} style={[textStyle, style]}/>;
};
var Ionicons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <Ionicons_1.default {...props} style={[textStyle, style]}/>;
};
var MaterialCommunityIcons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return (<MaterialCommunityIcons_1.default {...props} style={[textStyle, style]}/>);
};
var MaterialIcons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <MaterialIcons_1.default {...props} style={[textStyle, style]}/>;
};
var Octicons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <Octicons_1.default {...props} style={[textStyle, style]}/>;
};
var SimpleLineIcons = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <SimpleLineIcons_1.default {...props} style={[textStyle, style]}/>;
};
var Zocial = function (_a) {
    var styleNames = _a.styleNames, style = _a.style, props = __rest(_a, ["styleNames", "style"]);
    var textStyle = (0, stylers_1.useIconStyles)(styleNames !== null && styleNames !== void 0 ? styleNames : []);
    return <Zocial_1.default {...props} style={[textStyle, style]}/>;
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
exports.default = Icon;
//# sourceMappingURL=icon.js.map