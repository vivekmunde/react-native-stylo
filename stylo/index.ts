import _IconStyles from './stylers/icon-styles';
import _ImageBackgroundStyles from './stylers/image-background-styles';
import _ImageStyles from './stylers/image-styles';
import _KeyboardAvoidingViewStyles from './stylers/keyboard-avoiding-view-styles';
import _SafeAreaViewStyles from './stylers/safe-area-view-styles';
import {
  ScrollViewContentContainerStyles as _ScrollViewContentContainerStyles,
  ScrollViewStyles as _ScrollViewStyles,
} from './stylers/scroll-view-styles';
import _Styles from './stylers/styles';
import _TextInputStyles from './stylers/text-input-styles';
import _TextStyles from './stylers/text-styles';
import _ThemeContext from './stylers/theme-context';
import _ThemeProvider from './stylers/theme-provider';
import _TouchableStyles from './stylers/touchable-styles';
import { TStylesProps as _TStylesProps } from './stylers/types';
import _useIconStyles from './stylers/use-icon-styles';
import _useImageBackgroundStyles from './stylers/use-image-background-styles';
import _useImageStyles from './stylers/use-image-styles';
import _useKeyboardAvoidingViewStyles from './stylers/use-keyboard-avoiding-view-styles';
import _useSafeAreaViewStyles from './stylers/use-safe-area-view-styles';
import {
  useScrollViewContentContainerStyles as _useScrollViewContentContainerStyles,
  useScrollViewStyles as _useScrollViewStyles,
} from './stylers/use-scroll-view-styles';
import _useStyle from './stylers/use-style';
import _useStyles from './stylers/use-styles';
import _useTextInputStyles from './stylers/use-text-input-styles';
import _useTextStyles from './stylers/use-text-styles';
import _useTouchableStyles from './stylers/use-touchable-styles';
import _useVariables from './stylers/use-variables';
import _useViewStyles from './stylers/use-view-styles';
import _ViewStyles from './stylers/view-styles';
import _Icon, { TIconProps as _IconProps } from './stylish/icon';
import _Image, { TImageProps as _ImageProps } from './stylish/image';
import _ImageBackground, {
  TImageBackgroundProps as _ImageBackgroundProps,
} from './stylish/image-background';
import _KeyboardAvoidingView, {
  TKeyboardAvoidingViewProps as _KeyboardAvoidingViewProps,
} from './stylish/keyboard-avoiding-view';
import _SafeAreaView, {
  TSafeAreaViewProps as _SafeAreaViewProps,
} from './stylish/safe-area-view';
import _ScrollView, {
  TScrollViewProps as _ScrollViewProps,
} from './stylish/scroll-view';
import _Text, { TTextProps as _TextProps } from './stylish/text';
import _TextInput, {
  TTextInputProps as _TextInputProps,
} from './stylish/text-input';
import {
  Pressable as _Pressable,
  TouchableHighlight as _TouchableHighlight,
  TouchableOpacity as _TouchableOpacity,
  TPressableProps as _PressableProps,
  TTouchableHighlightProps as _TouchableHighlightProps,
  TTouchableOpacityProps as _TouchableOpacityProps,
} from './stylish/touchable';
import _View, { TViewProps as _ViewProps } from './stylish/view';

export type TStylesProps<T extends string> = _TStylesProps<T>;

export type TPressableProps<T extends string> = _PressableProps<T>;
export type TTouchableHighlightProps<T extends string> =
  _TouchableHighlightProps<T>;
export type TTouchableOpacityProps<T extends string> =
  _TouchableOpacityProps<T>;

export type TIconProps<T extends string> = _IconProps<T>;

export type TImageProps<T extends string> = _ImageProps<T>;
export type TImageBackgroundProps<T extends string> = _ImageBackgroundProps<T>;

export type TKeyboardAvoidingViewProps<T extends string> =
  _KeyboardAvoidingViewProps<T>;

export type TSafeAreaViewProps<T extends string> = _SafeAreaViewProps<T>;

export type TScrollViewProps<
  TScrollViewStyle extends string,
  TScrollViewContentContainerStyle extends string,
> = _ScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>;

export type TTextProps<T extends string> = _TextProps<T>;

export type TTextInputProps<T extends string> = _TextInputProps<T>;

export type TViewProps<T extends string> = _ViewProps<T>;

export const IconStyles = _IconStyles;
export const ImageBackgroundStyles = _ImageBackgroundStyles;
export const ImageStyles = _ImageStyles;
export const KeyboardAvoidingViewStyles = _KeyboardAvoidingViewStyles;
export const SafeAreaViewStyles = _SafeAreaViewStyles;
export const ScrollViewStyles = _ScrollViewStyles;
export const ScrollViewContentContainerStyles =
  _ScrollViewContentContainerStyles;
export const Styles = _Styles;
export const TextStyles = _TextStyles;
export const TextInputStyles = _TextInputStyles;
export const ThemeContext = _ThemeContext;
export const ThemeProvider = _ThemeProvider;
export const TouchableStyles = _TouchableStyles;
export const useIconStyles = _useIconStyles;
export const useImageBackgroundStyles = _useImageBackgroundStyles;
export const useImageStyles = _useImageStyles;
export const useKeyboardAvoidingViewStyles = _useKeyboardAvoidingViewStyles;
export const useSafeAreaViewStyles = _useSafeAreaViewStyles;
export const useScrollViewStyles = _useScrollViewStyles;
export const useScrollViewContentContainerStyles =
  _useScrollViewContentContainerStyles;
export const useStyle = _useStyle;
export const useStyles = _useStyles;
export const useTextStyles = _useTextStyles;
export const useTextInputStyles = _useTextInputStyles;
export const useTouchableStyles = _useTouchableStyles;
export const useVariables = _useVariables;
export const useViewStyles = _useViewStyles;
export const ViewStyles = _ViewStyles;

export const Icon = _Icon;
export const Image = _Image;
export const ImageBackground = _ImageBackground;
export const Pressable = _Pressable;
export const KeyboardAvoidingView = _KeyboardAvoidingView;
export const SafeAreaView = _SafeAreaView;
export const ScrollView = _ScrollView;
export const Text = _Text;
export const TextInput = _TextInput;
export const TouchableHighlight = _TouchableHighlight;
export const TouchableOpacity = _TouchableOpacity;
export const View = _View;
