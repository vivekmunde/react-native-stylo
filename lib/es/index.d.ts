/// <reference types="react" />
import _useIconStyles from './stylers/use-icon-styles';
import _useImageBackgroundStyles from './stylers/use-image-background-styles';
import _useImageStyles from './stylers/use-image-styles';
import _useSafeAreaViewStyles from './stylers/use-safe-area-view-styles';
import { useScrollViewContentContainerStyles as _useScrollViewContentContainerStyles, useScrollViewStyles as _useScrollViewStyles } from './stylers/use-scroll-view-styles';
import _useStyles from './stylers/use-styles';
import _useTextInputStyles from './stylers/use-text-input-styles';
import _useTextStyles from './stylers/use-text-styles';
import _useTouchableStyles from './stylers/use-touchable-styles';
import _useVariables from './stylers/use-variables';
import _useViewStyles from './stylers/use-view-styles';
import _Icon, { TIconProps as _IconProps } from './stylish/icon';
import { TImageProps as _ImageProps } from './stylish/image';
import { TImageBackgroundProps as _ImageBackgroundProps } from './stylish/image-background';
import { TSafeAreaViewProps as _SafeAreaViewProps } from './stylish/safe-area-view';
import { TScrollViewProps as _ScrollViewProps } from './stylish/scroll-view';
import { TTextProps as _TextProps } from './stylish/text';
import { TTextInputProps as _TextInputProps } from './stylish/text-input';
import { TPressableProps as _PressableProps, TTouchableHighlightProps as _TouchableHighlightProps, TTouchableOpacityProps as _TouchableOpacityProps } from './stylish/touchable';
import { TViewProps as _ViewProps } from './stylish/view';
export declare type TPressableProps<TStyleName extends string> = _PressableProps<TStyleName>;
export declare type TTouchableHighlightProps<TStyleName extends string> = _TouchableHighlightProps<TStyleName>;
export declare type TTouchableOpacityProps<TStyleName extends string> = _TouchableOpacityProps<TStyleName>;
export declare type TIconProps<TStyleName extends string> = _IconProps<TStyleName>;
export declare type TImageProps<TStyleName extends string> = _ImageProps<TStyleName>;
export declare type TImageBackgroundProps<TStyleName extends string> = _ImageBackgroundProps<TStyleName>;
export declare type TSafeAreaViewProps<TStyleName extends string> = _SafeAreaViewProps<TStyleName>;
export declare type TScrollViewProps<TScrollViewStyle extends string, TScrollViewContentContainerStyle extends string> = _ScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>;
export declare type TTextProps<TStyleName extends string> = _TextProps<TStyleName>;
export declare type TTextInputProps<TStyleName extends string> = _TextInputProps<TStyleName>;
export declare type TViewProps<TStyleName extends string> = _ViewProps<TStyleName>;
export declare const IconStyles: <TStyleName extends string>({ styleNames, children, }: {
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ImageBackgroundStyles: <TStyleName extends string>({ styleNames, children, }: {
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ImageStyles: <TStyleName extends string>({ styleNames, children, }: {
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ImageStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const SafeAreaViewStyles: <TStyleName extends string>({ styleNames, children, }: {
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ScrollViewStyles: <TStyleName extends string>({ styleNames, children, }: {
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ScrollViewContentContainerStyles: <TStyleName extends string>({ styleNames, children, }: {
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const Styles: <TStyleProp, TStyleName extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace: import("./stylers/types").TStyleNamespace;
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<TStyleProp>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const TextStyles: <TStyleName extends string>({ styleNames, children, }: {
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const TextInputStyles: <TStyleName extends string>({ styleNames, children, }: {
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ThemeContext: import("react").Context<import("./theme-context").TContext>;
export declare const ThemeProvider: import("react").FC<import("./theme-provider").TProps>;
export declare const TouchableStyles: <TStyleName extends string>({ styleNames, children, }: {
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const useIconStyles: typeof _useIconStyles;
export declare const useImageBackgroundStyles: typeof _useImageBackgroundStyles;
export declare const useImageStyles: typeof _useImageStyles;
export declare const useSafeAreaViewStyles: typeof _useSafeAreaViewStyles;
export declare const useScrollViewStyles: typeof _useScrollViewStyles;
export declare const useScrollViewContentContainerStyles: typeof _useScrollViewContentContainerStyles;
export declare const useStyles: typeof _useStyles;
export declare const useTextStyles: typeof _useTextStyles;
export declare const useTextInputStyles: typeof _useTextInputStyles;
export declare const useTouchableStyles: typeof _useTouchableStyles;
export declare const useVariables: typeof _useVariables;
export declare const useViewStyles: typeof _useViewStyles;
export declare const ViewStyles: <TStyleName extends string>({ styleNames, children, }: {
    styleNames: TStyleName[];
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const Icon: typeof _Icon;
export declare const Image: <TStyleName extends string>({ styleNames, style, ...props }: _ImageProps<TStyleName>) => JSX.Element;
export declare const ImageBackground: <TStyleName extends string>({ styleNames, style, ...props }: _ImageBackgroundProps<TStyleName>) => JSX.Element;
export declare const Pressable: <TStyleName extends string>({ styleNames, style, ...props }: _PressableProps<TStyleName>) => JSX.Element;
export declare const SafeAreaView: <TStyleName extends string>({ styleNames, style, ...props }: _SafeAreaViewProps<TStyleName>) => JSX.Element;
export declare const ScrollView: <TScrollViewStyle extends string, TScrollViewContentContainerStyle extends string>({ styleNames, style, contentContainerStyleNames, contentContainerStyle, ...props }: _ScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>) => JSX.Element;
export declare const Text: <TStyleName extends string>({ styleNames, style, ...props }: _TextProps<TStyleName>) => JSX.Element;
export declare const TextInput: <TStyleName extends string>({ styleNames, style, ...props }: _TextInputProps<TStyleName>) => JSX.Element;
export declare const TouchableHighlight: <TStyleName extends string>({ styleNames, style, ...props }: _TouchableHighlightProps<TStyleName>) => JSX.Element;
export declare const TouchableOpacity: <TStyleName extends string>({ styleNames, style, ...props }: _TouchableOpacityProps<TStyleName>) => JSX.Element;
export declare const View: <TStyleName extends string>({ styleNames, style, ...props }: _ViewProps<TStyleName>) => JSX.Element;
declare const Stylo: {
    IconStyles: <TStyleName extends string>({ styleNames, children, }: {
        styleNames: TStyleName[];
        children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    ImageBackgroundStyles: <TStyleName_1 extends string>({ styleNames, children, }: {
        styleNames: TStyleName_1[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    ImageStyles: <TStyleName_2 extends string>({ styleNames, children, }: {
        styleNames: TStyleName_2[];
        children: (style: import("react-native").StyleProp<import("react-native").ImageStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    SafeAreaViewStyles: <TStyleName_3 extends string>({ styleNames, children, }: {
        styleNames: TStyleName_3[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    ScrollViewStyles: <TStyleName_4 extends string>({ styleNames, children, }: {
        styleNames: TStyleName_4[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    ScrollViewContentContainerStyles: <TStyleName_5 extends string>({ styleNames, children, }: {
        styleNames: TStyleName_5[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    Styles: <TStyleProp, TStyleName_6 extends string>({ styleNamespace, styleNames, children, }: {
        styleNamespace: import("./stylers/types").TStyleNamespace;
        styleNames: TStyleName_6[];
        children: (style: import("react-native").StyleProp<TStyleProp>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    TextStyles: <TStyleName_7 extends string>({ styleNames, children, }: {
        styleNames: TStyleName_7[];
        children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    TextInputStyles: <TStyleName_8 extends string>({ styleNames, children, }: {
        styleNames: TStyleName_8[];
        children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    ThemeContext: import("react").Context<import("./theme-context").TContext>;
    ThemeProvider: import("react").FC<import("./theme-provider").TProps>;
    TouchableStyles: <TStyleName_9 extends string>({ styleNames, children, }: {
        styleNames: TStyleName_9[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    useIconStyles: typeof _useIconStyles;
    useImageBackgroundStyles: typeof _useImageBackgroundStyles;
    useImageStyles: typeof _useImageStyles;
    useSafeAreaViewStyles: typeof _useSafeAreaViewStyles;
    useScrollViewStyles: typeof _useScrollViewStyles;
    useScrollViewContentContainerStyles: typeof _useScrollViewContentContainerStyles;
    useStyles: typeof _useStyles;
    useTextStyles: typeof _useTextStyles;
    useTextInputStyles: typeof _useTextInputStyles;
    useTouchableStyles: typeof _useTouchableStyles;
    useVariables: typeof _useVariables;
    useViewStyles: typeof _useViewStyles;
    ViewStyles: <TStyleName_10 extends string>({ styleNames, children, }: {
        styleNames: TStyleName_10[];
        children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
    Icon: typeof _Icon;
    Image: <TStyleName_11 extends string>({ styleNames, style, ...props }: _ImageProps<TStyleName_11>) => JSX.Element;
    ImageBackground: <TStyleName_12 extends string>({ styleNames, style, ...props }: _ImageBackgroundProps<TStyleName_12>) => JSX.Element;
    Pressable: <TStyleName_13 extends string>({ styleNames, style, ...props }: _PressableProps<TStyleName_13>) => JSX.Element;
    SafeAreaView: <TStyleName_14 extends string>({ styleNames, style, ...props }: _SafeAreaViewProps<TStyleName_14>) => JSX.Element;
    ScrollView: <TScrollViewStyle extends string, TScrollViewContentContainerStyle extends string>({ styleNames, style, contentContainerStyleNames, contentContainerStyle, ...props }: _ScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>) => JSX.Element;
    Text: <TStyleName_15 extends string>({ styleNames, style, ...props }: _TextProps<TStyleName_15>) => JSX.Element;
    TextInput: <TStyleName_16 extends string>({ styleNames, style, ...props }: _TextInputProps<TStyleName_16>) => JSX.Element;
    TouchableHighlight: <TStyleName_17 extends string>({ styleNames, style, ...props }: _TouchableHighlightProps<TStyleName_17>) => JSX.Element;
    TouchableOpacity: <TStyleName_18 extends string>({ styleNames, style, ...props }: _TouchableOpacityProps<TStyleName_18>) => JSX.Element;
    View: <TStyleName_19 extends string>({ styleNames, style, ...props }: _ViewProps<TStyleName_19>) => JSX.Element;
};
export default Stylo;
