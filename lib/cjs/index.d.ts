/// <reference types="react" />
import { TStylesProps as _TStylesProps } from './stylers/types';
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
export declare type TStylesProps<T extends string> = _TStylesProps<T>;
export declare type TPressableProps<T extends string> = _PressableProps<T>;
export declare type TTouchableHighlightProps<T extends string> = _TouchableHighlightProps<T>;
export declare type TTouchableOpacityProps<T extends string> = _TouchableOpacityProps<T>;
export declare type TIconProps<T extends string> = _IconProps<T>;
export declare type TImageProps<T extends string> = _ImageProps<T>;
export declare type TImageBackgroundProps<T extends string> = _ImageBackgroundProps<T>;
export declare type TKeyboardAvoidingViewProps<T extends string> = _KeyboardAvoidingViewProps<T>;
export declare type TSafeAreaViewProps<T extends string> = _SafeAreaViewProps<T>;
export declare type TScrollViewProps<TScrollViewStyle extends string, TScrollViewContentContainerStyle extends string> = _ScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>;
export declare type TTextProps<T extends string> = _TextProps<T>;
export declare type TTextInputProps<T extends string> = _TextInputProps<T>;
export declare type TViewProps<T extends string> = _ViewProps<T>;
export declare const IconStyles: <T extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: T[] | undefined;
    children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ImageBackgroundStyles: <T extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: T[] | undefined;
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ImageStyles: <T extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: T[] | undefined;
    children: (style: import("react-native").StyleProp<import("react-native").ImageStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const KeyboardAvoidingViewStyles: <T extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: T[] | undefined;
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const SafeAreaViewStyles: <T extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: T[] | undefined;
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ScrollViewStyles: <T extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: T[] | undefined;
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ScrollViewContentContainerStyles: <T extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: T[] | undefined;
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const Styles: <TStyleProp, TStyleName extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: TStyleName[] | undefined;
    children: (style: import("react-native").StyleProp<TStyleProp>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const TextStyles: <T extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: T[] | undefined;
    children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const TextInputStyles: <T extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: T[] | undefined;
    children: (style: import("react-native").StyleProp<import("react-native").TextStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const ThemeContext: import("react").Context<import("./stylers/theme-context").TContext>;
export declare const ThemeProvider: import("react").FC<import("./stylers/theme-context").TContext>;
export declare const TouchableStyles: <T extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: T[] | undefined;
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
export declare const ViewStyles: <T extends string>({ styleNamespace, styleNames, children, }: {
    styleNamespace?: string | undefined;
    styleNames?: T[] | undefined;
    children: (style: import("react-native").StyleProp<import("react-native").ViewStyle>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare const Icon: typeof _Icon;
export declare const Image: <T extends string>({ styleNamespace, styleNames, style, ...props }: _ImageProps<T>) => JSX.Element;
export declare const ImageBackground: <T extends string>({ styleNamespace, styleNames, style, ...props }: _ImageBackgroundProps<T>) => JSX.Element;
export declare const Pressable: <T extends string>({ styleNamespace, styleNames, style, ...props }: _PressableProps<T>) => JSX.Element;
export declare const KeyboardAvoidingView: <T extends string>({ styleNamespace, styleNames, style, ...props }: _KeyboardAvoidingViewProps<T>) => JSX.Element;
export declare const SafeAreaView: <T extends string>({ styleNamespace, styleNames, style, ...props }: _SafeAreaViewProps<T>) => JSX.Element;
export declare const ScrollView: <TScrollViewStyle extends string, TScrollViewContentContainerStyle extends string>({ styleNamespace, styleNames, style, contentContainerStyleNamespace, contentContainerStyleNames, contentContainerStyle, ...props }: _ScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>) => JSX.Element;
export declare const Text: <T extends string>({ styleNamespace, styleNames, style, ...props }: _TextProps<T>) => JSX.Element;
export declare const TextInput: <T extends string>({ styleNamespace, styleNames, style, ...props }: _TextInputProps<T>) => JSX.Element;
export declare const TouchableHighlight: <T extends string>({ styleNamespace, styleNames, style, ...props }: _TouchableHighlightProps<T>) => JSX.Element;
export declare const TouchableOpacity: <T extends string>({ styleNamespace, styleNames, style, ...props }: _TouchableOpacityProps<T>) => JSX.Element;
export declare const View: <T extends string>({ styleNamespace, styleNames, style, ...props }: _ViewProps<T>) => JSX.Element;
