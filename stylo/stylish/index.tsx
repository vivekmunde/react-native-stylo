import { TStylesProps as TRNSStylesProps } from '../stylers/types';
import rnsUseStyle from '../stylers/use-style';
import RNSThemeProvider from '../theme-provider';
import RNSIcon, { TIconProps as TRNSIconProps } from './icon';
import RNSImage, { TImageProps as TRNSImageProps } from './image';
import RNSImageBackground, {
  TImageBackgroundProps as TRNSImageBackgroundProps,
} from './image-background';
import RNSKeyboardAvoidingView, {
  TKeyboardAvoidingViewProps as TRNSKeyboardAvoidingViewProps,
} from './keyboard-avoiding-view';
import RNSSafeAreaView, {
  TSafeAreaViewProps as TRNSSafeAreaViewProps,
} from './safe-area-view';
import RNSScrollView, {
  TScrollViewProps as TRNSScrollViewProps,
} from './scroll-view';
import RNSText, { TTextProps as TRNSTextProps } from './text';
import RNSTextInput, {
  TTextInputProps as TRNSTextInputProps,
} from './text-input';
import {
  Pressable as RNSPressable,
  TouchableHighlight as RNSTouchableHighlight,
  TouchableOpacity as RNSTouchableOpacity,
  TPressableProps as TRNSPressableProps,
  TTouchableHighlightProps as TRNSTouchableHighlightProps,
  TTouchableOpacityProps as TRNSTouchableOpacityProps,
} from './touchable';
import RNSView, { TViewProps as TRNSViewProps } from './view';

export const Icon = RNSIcon;
export const Image = RNSImage;
export const ImageBackground = RNSImageBackground;
export const Pressable = RNSPressable;
export const KeyboardAvoidingView = RNSKeyboardAvoidingView;
export const SafeAreaView = RNSSafeAreaView;
export const ScrollView = RNSScrollView;
export const Text = RNSText;
export const TextInput = RNSTextInput;
export const ThemeProvider = RNSThemeProvider;
export const TouchableHighlight = RNSTouchableHighlight;
export const TouchableOpacity = RNSTouchableOpacity;
export const useStyle = rnsUseStyle;
export const View = RNSView;

export type TStylesProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSStylesProps<TStyleName, TStyleNamespace>;

export type TPressableProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSPressableProps<TStyleName, TStyleNamespace>;
export type TTouchableHighlightProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSTouchableHighlightProps<TStyleName, TStyleNamespace>;
export type TTouchableOpacityProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSTouchableOpacityProps<TStyleName, TStyleNamespace>;

export type TIconProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSIconProps<TStyleName, TStyleNamespace>;

export type TImageProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSImageProps<TStyleName, TStyleNamespace>;
export type TImageBackgroundProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSImageBackgroundProps<TStyleName, TStyleNamespace>;

export type TKeyboardAvoidingViewProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSKeyboardAvoidingViewProps<TStyleName, TStyleNamespace>;

export type TSafeAreaViewProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSSafeAreaViewProps<TStyleName, TStyleNamespace>;

export type TScrollViewProps<
  TScrollViewStyle extends string,
  TScrollViewStyleNamespace extends string,
  TScrollViewContentContainerStyle extends string,
  TScrollViewContentContainerStyleNamespace extends string,
> = TRNSScrollViewProps<
  TScrollViewStyle,
  TScrollViewStyleNamespace,
  TScrollViewContentContainerStyle,
  TScrollViewContentContainerStyleNamespace
>;

export type TTextProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSTextProps<TStyleName, TStyleNamespace>;

export type TTextInputProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSTextInputProps<TStyleName, TStyleNamespace>;

export type TViewProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TRNSViewProps<TStyleName, TStyleNamespace>;
