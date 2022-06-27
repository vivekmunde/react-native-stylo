"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = exports.TouchableOpacity = exports.TouchableHighlight = exports.TextInput = exports.Text = exports.ScrollView = exports.SafeAreaView = exports.KeyboardAvoidingView = exports.Pressable = exports.ImageBackground = exports.Image = exports.Icon = exports.ViewStyles = exports.useViewStyles = exports.useVariables = exports.useTouchableStyles = exports.useTextInputStyles = exports.useTextStyles = exports.useStyles = exports.useStyle = exports.useScrollViewContentContainerStyles = exports.useScrollViewStyles = exports.useSafeAreaViewStyles = exports.useKeyboardAvoidingViewStyles = exports.useImageStyles = exports.useImageBackgroundStyles = exports.useIconStyles = exports.TouchableStyles = exports.ThemeProvider = exports.ThemeContext = exports.TextInputStyles = exports.TextStyles = exports.Styles = exports.ScrollViewContentContainerStyles = exports.ScrollViewStyles = exports.SafeAreaViewStyles = exports.KeyboardAvoidingViewStyles = exports.ImageStyles = exports.ImageBackgroundStyles = exports.IconStyles = void 0;
var icon_styles_1 = __importDefault(require("./stylers/icon-styles"));
var image_background_styles_1 = __importDefault(require("./stylers/image-background-styles"));
var image_styles_1 = __importDefault(require("./stylers/image-styles"));
var keyboard_avoiding_view_styles_1 = __importDefault(require("./stylers/keyboard-avoiding-view-styles"));
var safe_area_view_styles_1 = __importDefault(require("./stylers/safe-area-view-styles"));
var scroll_view_styles_1 = require("./stylers/scroll-view-styles");
var styles_1 = __importDefault(require("./stylers/styles"));
var text_input_styles_1 = __importDefault(require("./stylers/text-input-styles"));
var text_styles_1 = __importDefault(require("./stylers/text-styles"));
var touchable_styles_1 = __importDefault(require("./stylers/touchable-styles"));
var use_icon_styles_1 = __importDefault(require("./stylers/use-icon-styles"));
var use_image_background_styles_1 = __importDefault(require("./stylers/use-image-background-styles"));
var use_image_styles_1 = __importDefault(require("./stylers/use-image-styles"));
var use_keyboard_avoiding_view_styles_1 = __importDefault(require("./stylers/use-keyboard-avoiding-view-styles"));
var use_safe_area_view_styles_1 = __importDefault(require("./stylers/use-safe-area-view-styles"));
var use_scroll_view_styles_1 = require("./stylers/use-scroll-view-styles");
var use_style_1 = __importDefault(require("./stylers/use-style"));
var use_styles_1 = __importDefault(require("./stylers/use-styles"));
var use_text_input_styles_1 = __importDefault(require("./stylers/use-text-input-styles"));
var use_text_styles_1 = __importDefault(require("./stylers/use-text-styles"));
var use_touchable_styles_1 = __importDefault(require("./stylers/use-touchable-styles"));
var use_variables_1 = __importDefault(require("./stylers/use-variables"));
var use_view_styles_1 = __importDefault(require("./stylers/use-view-styles"));
var view_styles_1 = __importDefault(require("./stylers/view-styles"));
var icon_1 = __importDefault(require("./stylish/icon"));
var image_1 = __importDefault(require("./stylish/image"));
var image_background_1 = __importDefault(require("./stylish/image-background"));
var keyboard_avoiding_view_1 = __importDefault(require("./stylish/keyboard-avoiding-view"));
var safe_area_view_1 = __importDefault(require("./stylish/safe-area-view"));
var scroll_view_1 = __importDefault(require("./stylish/scroll-view"));
var text_1 = __importDefault(require("./stylish/text"));
var text_input_1 = __importDefault(require("./stylish/text-input"));
var touchable_1 = require("./stylish/touchable");
var view_1 = __importDefault(require("./stylish/view"));
var theme_context_1 = __importDefault(require("./theme-context"));
var theme_provider_1 = __importDefault(require("./theme-provider"));
exports.IconStyles = icon_styles_1.default;
exports.ImageBackgroundStyles = image_background_styles_1.default;
exports.ImageStyles = image_styles_1.default;
exports.KeyboardAvoidingViewStyles = keyboard_avoiding_view_styles_1.default;
exports.SafeAreaViewStyles = safe_area_view_styles_1.default;
exports.ScrollViewStyles = scroll_view_styles_1.ScrollViewStyles;
exports.ScrollViewContentContainerStyles = scroll_view_styles_1.ScrollViewContentContainerStyles;
exports.Styles = styles_1.default;
exports.TextStyles = text_styles_1.default;
exports.TextInputStyles = text_input_styles_1.default;
exports.ThemeContext = theme_context_1.default;
exports.ThemeProvider = theme_provider_1.default;
exports.TouchableStyles = touchable_styles_1.default;
exports.useIconStyles = use_icon_styles_1.default;
exports.useImageBackgroundStyles = use_image_background_styles_1.default;
exports.useImageStyles = use_image_styles_1.default;
exports.useKeyboardAvoidingViewStyles = use_keyboard_avoiding_view_styles_1.default;
exports.useSafeAreaViewStyles = use_safe_area_view_styles_1.default;
exports.useScrollViewStyles = use_scroll_view_styles_1.useScrollViewStyles;
exports.useScrollViewContentContainerStyles = use_scroll_view_styles_1.useScrollViewContentContainerStyles;
exports.useStyle = use_style_1.default;
exports.useStyles = use_styles_1.default;
exports.useTextStyles = use_text_styles_1.default;
exports.useTextInputStyles = use_text_input_styles_1.default;
exports.useTouchableStyles = use_touchable_styles_1.default;
exports.useVariables = use_variables_1.default;
exports.useViewStyles = use_view_styles_1.default;
exports.ViewStyles = view_styles_1.default;
exports.Icon = icon_1.default;
exports.Image = image_1.default;
exports.ImageBackground = image_background_1.default;
exports.Pressable = touchable_1.Pressable;
exports.KeyboardAvoidingView = keyboard_avoiding_view_1.default;
exports.SafeAreaView = safe_area_view_1.default;
exports.ScrollView = scroll_view_1.default;
exports.Text = text_1.default;
exports.TextInput = text_input_1.default;
exports.TouchableHighlight = touchable_1.TouchableHighlight;
exports.TouchableOpacity = touchable_1.TouchableOpacity;
exports.View = view_1.default;
var Stylo = {
    IconStyles: icon_styles_1.default,
    ImageBackgroundStyles: image_background_styles_1.default,
    ImageStyles: image_styles_1.default,
    KeyboardAvoidingViewStyles: keyboard_avoiding_view_styles_1.default,
    SafeAreaViewStyles: safe_area_view_styles_1.default,
    ScrollViewStyles: scroll_view_styles_1.ScrollViewStyles,
    ScrollViewContentContainerStyles: scroll_view_styles_1.ScrollViewContentContainerStyles,
    Styles: styles_1.default,
    TextStyles: text_styles_1.default,
    TextInputStyles: text_input_styles_1.default,
    ThemeContext: theme_context_1.default,
    ThemeProvider: theme_provider_1.default,
    TouchableStyles: touchable_styles_1.default,
    useIconStyles: use_icon_styles_1.default,
    useImageBackgroundStyles: use_image_background_styles_1.default,
    useImageStyles: use_image_styles_1.default,
    useKeyboardAvoidingViewStyles: use_keyboard_avoiding_view_styles_1.default,
    useSafeAreaViewStyles: use_safe_area_view_styles_1.default,
    useScrollViewStyles: use_scroll_view_styles_1.useScrollViewStyles,
    useScrollViewContentContainerStyles: use_scroll_view_styles_1.useScrollViewContentContainerStyles,
    useStyle: use_style_1.default,
    useStyles: use_styles_1.default,
    useTextStyles: use_text_styles_1.default,
    useTextInputStyles: use_text_input_styles_1.default,
    useTouchableStyles: use_touchable_styles_1.default,
    useVariables: use_variables_1.default,
    useViewStyles: use_view_styles_1.default,
    ViewStyles: view_styles_1.default,
    Icon: icon_1.default,
    Image: image_1.default,
    ImageBackground: image_background_1.default,
    Pressable: touchable_1.Pressable,
    KeyboardAvoidingView: keyboard_avoiding_view_1.default,
    SafeAreaView: safe_area_view_1.default,
    ScrollView: scroll_view_1.default,
    Text: text_1.default,
    TextInput: text_input_1.default,
    TouchableHighlight: touchable_1.TouchableHighlight,
    TouchableOpacity: touchable_1.TouchableOpacity,
    View: view_1.default,
};
exports.default = Stylo;
//# sourceMappingURL=index.js.map