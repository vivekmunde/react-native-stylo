import _IconStyles from './stylers/icon-styles';
import _ImageBackgroundStyles from './stylers/image-background-styles';
import _ImageStyles from './stylers/image-styles';
import _SafeAreaViewStyles from './stylers/safe-area-view-styles';
import {
  ScrollViewContentContainerStyles as _ScrollViewContentContainerStyles,
  ScrollViewStyles as _ScrollViewStyles,
} from './stylers/scroll-view-styles';
import _Styles from './stylers/styles';
import _TextInputStyles from './stylers/text-input-styles';
import _TextStyles from './stylers/text-styles';
import _TouchableStyles from './stylers/touchable-styles';
import _useIconStyles from './stylers/use-icon-styles';
import _useImageBackgroundStyles from './stylers/use-image-background-styles';
import _useImageStyles from './stylers/use-image-styles';
import _useSafeAreaViewStyles from './stylers/use-safe-area-view-styles';
import {
  useScrollViewContentContainerStyles as _useScrollViewContentContainerStyles,
  useScrollViewStyles as _useScrollViewStyles,
} from './stylers/use-scroll-view-styles';
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
import _ThemeContext from './theme-context';
import _ThemeProvider from './theme-provider';

export type TPressableProps<TStyleName extends string> =
  _PressableProps<TStyleName>;
export type TTouchableHighlightProps<TStyleName extends string> =
  _TouchableHighlightProps<TStyleName>;
export type TTouchableOpacityProps<TStyleName extends string> =
  _TouchableOpacityProps<TStyleName>;

export type TIconProps<TStyleName extends string> = _IconProps<TStyleName>;

export type TImageProps<TStyleName extends string> = _ImageProps<TStyleName>;
export type TImageBackgroundProps<TStyleName extends string> =
  _ImageBackgroundProps<TStyleName>;

export type TSafeAreaViewProps<TStyleName extends string> =
  _SafeAreaViewProps<TStyleName>;

export type TScrollViewProps<
  TScrollViewStyle extends string,
  TScrollViewContentContainerStyle extends string,
> = _ScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>;

export type TTextProps<TStyleName extends string> = _TextProps<TStyleName>;

export type TTextInputProps<TStyleName extends string> =
  _TextInputProps<TStyleName>;

export type TViewProps<TStyleName extends string> = _ViewProps<TStyleName>;

export const IconStyles = _IconStyles;
export const ImageBackgroundStyles = _ImageBackgroundStyles;
export const ImageStyles = _ImageStyles;
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
export const useSafeAreaViewStyles = _useSafeAreaViewStyles;
export const useScrollViewStyles = _useScrollViewStyles;
export const useScrollViewContentContainerStyles =
  _useScrollViewContentContainerStyles;
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
export const SafeAreaView = _SafeAreaView;
export const ScrollView = _ScrollView;
export const Text = _Text;
export const TextInput = _TextInput;
export const TouchableHighlight = _TouchableHighlight;
export const TouchableOpacity = _TouchableOpacity;
export const View = _View;

const Stylo = {
  IconStyles: _IconStyles,
  ImageBackgroundStyles: _ImageBackgroundStyles,
  ImageStyles: _ImageStyles,
  SafeAreaViewStyles: _SafeAreaViewStyles,
  ScrollViewStyles: _ScrollViewStyles,
  ScrollViewContentContainerStyles: _ScrollViewContentContainerStyles,
  Styles: _Styles,
  TextStyles: _TextStyles,
  TextInputStyles: _TextInputStyles,
  ThemeContext: _ThemeContext,
  ThemeProvider: _ThemeProvider,
  TouchableStyles: _TouchableStyles,
  useIconStyles: _useIconStyles,
  useImageBackgroundStyles: _useImageBackgroundStyles,
  useImageStyles: _useImageStyles,
  useSafeAreaViewStyles: _useSafeAreaViewStyles,
  useScrollViewStyles: _useScrollViewStyles,
  useScrollViewContentContainerStyles: _useScrollViewContentContainerStyles,
  useStyles: _useStyles,
  useTextStyles: _useTextStyles,
  useTextInputStyles: _useTextInputStyles,
  useTouchableStyles: _useTouchableStyles,
  useVariables: _useVariables,
  useViewStyles: _useViewStyles,
  ViewStyles: _ViewStyles,

  Icon: _Icon,
  Image: _Image,
  ImageBackground: _ImageBackground,
  Pressable: _Pressable,
  SafeAreaView: _SafeAreaView,
  ScrollView: _ScrollView,
  Text: _Text,
  TextInput: _TextInput,
  TouchableHighlight: _TouchableHighlight,
  TouchableOpacity: _TouchableOpacity,
  View: _View,
};

export default Stylo;
