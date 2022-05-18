import RNSThemeProvider from '../stylers/theme-provider';
import { TStylesProps as TRNSStylesProps } from '../stylers/types';
import rnsUseStyle from '../stylers/use-style';
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

export type TStylesProps<T extends string> = TRNSStylesProps<T>;

export type TPressableProps<T extends string> = TRNSPressableProps<T>;
export type TTouchableHighlightProps<T extends string> =
  TRNSTouchableHighlightProps<T>;
export type TTouchableOpacityProps<T extends string> =
  TRNSTouchableOpacityProps<T>;

export type TIconProps<T extends string> = TRNSIconProps<T>;

export type TImageProps<T extends string> = TRNSImageProps<T>;
export type TImageBackgroundProps<T extends string> =
  TRNSImageBackgroundProps<T>;

export type TKeyboardAvoidingViewProps<T extends string> =
  TRNSKeyboardAvoidingViewProps<T>;

export type TSafeAreaViewProps<T extends string> = TRNSSafeAreaViewProps<T>;

export type TScrollViewProps<
  TScrollViewStyle extends string,
  TScrollViewContentContainerStyle extends string,
> = TRNSScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>;

export type TTextProps<T extends string> = TRNSTextProps<T>;

export type TTextInputProps<T extends string> = TRNSTextInputProps<T>;

export type TViewProps<T extends string> = TRNSViewProps<T>;
