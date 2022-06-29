/// <reference types="react" />
import _useIconStyles from './stylers/use-icon-styles';
import _useImageBackgroundStyles from './stylers/use-image-background-styles';
import _useImageStyles from './stylers/use-image-styles';
import _useKeyboardAvoidingViewStyles from './stylers/use-keyboard-avoiding-view-styles';
import _useSafeAreaViewStyles from './stylers/use-safe-area-view-styles';
import { useScrollViewContentContainerStyles as _useScrollViewContentContainerStyles, useScrollViewStyles as _useScrollViewStyles } from './stylers/use-scroll-view-styles';
import _useStyle from './stylers/use-style';
import _useStyles from './stylers/use-styles';
import _useTextInputStyles from './stylers/use-text-input-styles';
import _useTextStyles from './stylers/use-text-styles';
import _useTouchableStyles from './stylers/use-touchable-styles';
import _useVariables from './stylers/use-variables';
import _useViewStyles from './stylers/use-view-styles';
import _Icon, { TIconProps as _IconProps } from './stylish/icon';
import { TImageProps as _ImageProps } from './stylish/image';
import { TImageBackgroundProps as _ImageBackgroundProps } from './stylish/image-background';
import { TKeyboardAvoidingViewProps as _KeyboardAvoidingViewProps } from './stylish/keyboard-avoiding-view';
import { TSafeAreaViewProps as _SafeAreaViewProps } from './stylish/safe-area-view';
import { TScrollViewProps as _ScrollViewProps } from './stylish/scroll-view';
import { TTextProps as _TextProps } from './stylish/text';
import { TTextInputProps as _TextInputProps } from './stylish/text-input';
import { TPressableProps as _PressableProps, TTouchableHighlightProps as _TouchableHighlightProps, TTouchableOpacityProps as _TouchableOpacityProps } from './stylish/touchable';
import { TViewProps as _ViewProps } from './stylish/view';
export declare type TPressableProps<TStyleName extends string, TStyleNamespace extends string> = _PressableProps<TStyleName, TStyleNamespace>;
export declare type TTouchableHighlightProps<TStyleName extends string, TStyleNamespace extends string> = _TouchableHighlightProps<TStyleName, TStyleNamespace>;
export declare type TTouchableOpacityProps<TStyleName extends string, TStyleNamespace extends string> = _TouchableOpacityProps<TStyleName, TStyleNamespace>;
export declare type TIconProps<TStyleName extends string, TStyleNamespace extends string> = _IconProps<TStyleName, TStyleNamespace>;
export declare type TImageProps<TStyleName extends string, TStyleNamespace extends string> = _ImageProps<TStyleName, TStyleNamespace>;
export declare type TImageBackgroundProps<TStyleName extends string, TStyleNamespace extends string> = _ImageBackgroundProps<TStyleName, TStyleNamespace>;
export declare type TKeyboardAvoidingViewProps<TStyleName extends string, TStyleNamespace extends string> = _KeyboardAvoidingViewProps<TStyleName, TStyleNamespace>;
export declare type TSafeAreaViewProps<TStyleName extends string, TStyleNamespace extends string> = _SafeAreaViewProps<TStyleName, TStyleNamespace>;
export declare type TScrollViewProps<TScrollViewStyle extends string, TScrollViewStyleNamespace extends string, TScrollViewContentContainerStyle extends string, TScrollViewContentContainerStyleNamespace extends string> = _ScrollViewProps<TScrollViewStyle, TScrollViewStyleNamespace, TScrollViewContentContainerStyle, TScrollViewContentContainerStyleNamespace>;
export declare type TTextProps<TStyleName extends string, TStyleNamespace extends string> = _TextProps<TStyleName, TStyleNamespace>;
export declare type TTextInputProps<TStyleName extends string, TStyleNamespace extends string> = _TextInputProps<TStyleName, TStyleNamespace>;
export declare type TViewProps<TStyleName extends string, TStyleNamespace extends string> = _ViewProps<TStyleName, TStyleNamespace>;
export declare const IconStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: TStyleNamespace | undefined;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ImageBackgroundStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: TStyleNamespace | undefined;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ImageStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: TStyleNamespace | undefined;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ImageStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const KeyboardAvoidingViewStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: TStyleNamespace | undefined;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const SafeAreaViewStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: TStyleNamespace | undefined;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ScrollViewStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: TStyleNamespace | undefined;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ScrollViewContentContainerStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: TStyleNamespace | undefined;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const Styles: <TStyleProp, TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace: TStyleNamespace;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<TStyleProp>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const TextStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: TStyleNamespace | undefined;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const TextInputStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: TStyleNamespace | undefined;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ThemeContext: import("react").Context<import("./theme-context").TContext>;
export declare const ThemeProvider: import("react").FC<import("./theme-context").TContext>;
export declare const TouchableStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: TStyleNamespace | undefined;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const useIconStyles: typeof _useIconStyles;
export declare const useImageBackgroundStyles: typeof _useImageBackgroundStyles;
export declare const useImageStyles: typeof _useImageStyles;
export declare const useKeyboardAvoidingViewStyles: typeof _useKeyboardAvoidingViewStyles;
export declare const useSafeAreaViewStyles: typeof _useSafeAreaViewStyles;
export declare const useScrollViewStyles: typeof _useScrollViewStyles;
export declare const useScrollViewContentContainerStyles: typeof _useScrollViewContentContainerStyles;
export declare const useStyle: typeof _useStyle;
export declare const useStyles: typeof _useStyles;
export declare const useTextStyles: typeof _useTextStyles;
export declare const useTextInputStyles: typeof _useTextInputStyles;
export declare const useTouchableStyles: typeof _useTouchableStyles;
export declare const useVariables: typeof _useVariables;
export declare const useViewStyles: typeof _useViewStyles;
export declare const ViewStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: TStyleNamespace | undefined;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const Icon: typeof _Icon;
export declare const Image: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: _ImageProps<TStyleName, TStyleNamespace>) => JSX.Element;
export declare const ImageBackground: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: _ImageBackgroundProps<TStyleName, TStyleNamespace>) => JSX.Element;
export declare const Pressable: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: _PressableProps<TStyleName, TStyleNamespace>) => JSX.Element;
export declare const KeyboardAvoidingView: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: _KeyboardAvoidingViewProps<TStyleName, TStyleNamespace>) => JSX.Element;
export declare const SafeAreaView: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: _SafeAreaViewProps<TStyleName, TStyleNamespace>) => JSX.Element;
export declare const ScrollView: <TScrollViewStyle extends string, TScrollViewStyleNamespace extends string, TScrollViewContentContainerStyle extends string, TScrollViewContentContainerStyleNamespace extends string>({ styleNamespace, styleNames, style, contentContainerStyleNamespace, contentContainerStyleNames, contentContainerStyle, ...props }: _ScrollViewProps<TScrollViewStyle, TScrollViewStyleNamespace, TScrollViewContentContainerStyle, TScrollViewContentContainerStyleNamespace>) => JSX.Element;
export declare const Text: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: _TextProps<TStyleName, TStyleNamespace>) => JSX.Element;
export declare const TextInput: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: _TextInputProps<TStyleName, TStyleNamespace>) => JSX.Element;
export declare const TouchableHighlight: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: _TouchableHighlightProps<TStyleName, TStyleNamespace>) => JSX.Element;
export declare const TouchableOpacity: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: _TouchableOpacityProps<TStyleName, TStyleNamespace>) => JSX.Element;
export declare const View: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: _ViewProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const Stylo: {
    IconStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace?: TStyleNamespace | undefined;
        styleNames: TStyleName[];
        children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    ImageBackgroundStyles: <TStyleName_1 extends string, TStyleNamespace_1 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace?: TStyleNamespace_1 | undefined;
        styleNames: TStyleName_1[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    ImageStyles: <TStyleName_2 extends string, TStyleNamespace_2 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace?: TStyleNamespace_2 | undefined;
        styleNames: TStyleName_2[];
        children: (style: import("react-native").StyleProp<import("react-native").ImageStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    KeyboardAvoidingViewStyles: <TStyleName_3 extends string, TStyleNamespace_3 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace?: TStyleNamespace_3 | undefined;
        styleNames: TStyleName_3[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    SafeAreaViewStyles: <TStyleName_4 extends string, TStyleNamespace_4 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace?: TStyleNamespace_4 | undefined;
        styleNames: TStyleName_4[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    ScrollViewStyles: <TStyleName_5 extends string, TStyleNamespace_5 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace?: TStyleNamespace_5 | undefined;
        styleNames: TStyleName_5[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    ScrollViewContentContainerStyles: <TStyleName_6 extends string, TStyleNamespace_6 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace?: TStyleNamespace_6 | undefined;
        styleNames: TStyleName_6[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    Styles: <TStyleProp, TStyleName_7 extends string, TStyleNamespace_7 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace: TStyleNamespace_7;
        styleNames: TStyleName_7[];
        children: (style: import("react-native").StyleProp<TStyleProp>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    TextStyles: <TStyleName_8 extends string, TStyleNamespace_8 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace?: TStyleNamespace_8 | undefined;
        styleNames: TStyleName_8[];
        children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    TextInputStyles: <TStyleName_9 extends string, TStyleNamespace_9 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace?: TStyleNamespace_9 | undefined;
        styleNames: TStyleName_9[];
        children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    ThemeContext: import("react").Context<import("./theme-context").TContext>;
    ThemeProvider: import("react").FC<import("./theme-context").TContext>;
    TouchableStyles: <TStyleName_10 extends string, TStyleNamespace_10 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace?: TStyleNamespace_10 | undefined;
        styleNames: TStyleName_10[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    useIconStyles: typeof _useIconStyles;
    useImageBackgroundStyles: typeof _useImageBackgroundStyles;
    useImageStyles: typeof _useImageStyles;
    useKeyboardAvoidingViewStyles: typeof _useKeyboardAvoidingViewStyles;
    useSafeAreaViewStyles: typeof _useSafeAreaViewStyles;
    useScrollViewStyles: typeof _useScrollViewStyles;
    useScrollViewContentContainerStyles: typeof _useScrollViewContentContainerStyles;
    useStyle: typeof _useStyle;
    useStyles: typeof _useStyles;
    useTextStyles: typeof _useTextStyles;
    useTextInputStyles: typeof _useTextInputStyles;
    useTouchableStyles: typeof _useTouchableStyles;
    useVariables: typeof _useVariables;
    useViewStyles: typeof _useViewStyles;
    ViewStyles: <TStyleName_11 extends string, TStyleNamespace_11 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace?: TStyleNamespace_11 | undefined;
        styleNames: TStyleName_11[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    Icon: typeof _Icon;
    Image: <TStyleName_12 extends string, TStyleNamespace_12 extends string>({ styleNamespace, styleNames, style, ...props }: _ImageProps<TStyleName_12, TStyleNamespace_12>) => JSX.Element;
    ImageBackground: <TStyleName_13 extends string, TStyleNamespace_13 extends string>({ styleNamespace, styleNames, style, ...props }: _ImageBackgroundProps<TStyleName_13, TStyleNamespace_13>) => JSX.Element;
    Pressable: <TStyleName_14 extends string, TStyleNamespace_14 extends string>({ styleNamespace, styleNames, style, ...props }: _PressableProps<TStyleName_14, TStyleNamespace_14>) => JSX.Element;
    KeyboardAvoidingView: <TStyleName_15 extends string, TStyleNamespace_15 extends string>({ styleNamespace, styleNames, style, ...props }: _KeyboardAvoidingViewProps<TStyleName_15, TStyleNamespace_15>) => JSX.Element;
    SafeAreaView: <TStyleName_16 extends string, TStyleNamespace_16 extends string>({ styleNamespace, styleNames, style, ...props }: _SafeAreaViewProps<TStyleName_16, TStyleNamespace_16>) => JSX.Element;
    ScrollView: <TScrollViewStyle extends string, TScrollViewStyleNamespace extends string, TScrollViewContentContainerStyle extends string, TScrollViewContentContainerStyleNamespace extends string>({ styleNamespace, styleNames, style, contentContainerStyleNamespace, contentContainerStyleNames, contentContainerStyle, ...props }: _ScrollViewProps<TScrollViewStyle, TScrollViewStyleNamespace, TScrollViewContentContainerStyle, TScrollViewContentContainerStyleNamespace>) => JSX.Element;
    Text: <TStyleName_17 extends string, TStyleNamespace_17 extends string>({ styleNamespace, styleNames, style, ...props }: _TextProps<TStyleName_17, TStyleNamespace_17>) => JSX.Element;
    TextInput: <TStyleName_18 extends string, TStyleNamespace_18 extends string>({ styleNamespace, styleNames, style, ...props }: _TextInputProps<TStyleName_18, TStyleNamespace_18>) => JSX.Element;
    TouchableHighlight: <TStyleName_19 extends string, TStyleNamespace_19 extends string>({ styleNamespace, styleNames, style, ...props }: _TouchableHighlightProps<TStyleName_19, TStyleNamespace_19>) => JSX.Element;
    TouchableOpacity: <TStyleName_20 extends string, TStyleNamespace_20 extends string>({ styleNamespace, styleNames, style, ...props }: _TouchableOpacityProps<TStyleName_20, TStyleNamespace_20>) => JSX.Element;
    View: <TStyleName_21 extends string, TStyleNamespace_21 extends string>({ styleNamespace, styleNames, style, ...props }: _ViewProps<TStyleName_21, TStyleNamespace_21>) => JSX.Element;
};
export default Stylo;
