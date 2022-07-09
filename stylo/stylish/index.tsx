import { TStylesProps as TRNSStylesProps } from './types';
import RNSThemeProvider from '../theme-provider';
import RNSIcon, { TIconProps as TRNSIconProps } from './icon';
import RNSImage, { TImageProps as TRNSImageProps } from './image';
import RNSImageBackground, {
  TImageBackgroundProps as TRNSImageBackgroundProps,
} from './image-background';
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
export const SafeAreaView = RNSSafeAreaView;
export const ScrollView = RNSScrollView;
export const Text = RNSText;
export const TextInput = RNSTextInput;
export const ThemeProvider = RNSThemeProvider;
export const TouchableHighlight = RNSTouchableHighlight;
export const TouchableOpacity = RNSTouchableOpacity;
export const View = RNSView;

export type TStylesProps<TStyleName extends string> =
  TRNSStylesProps<TStyleName>;

export type TPressableProps<TStyleName extends string> =
  TRNSPressableProps<TStyleName>;
export type TTouchableHighlightProps<TStyleName extends string> =
  TRNSTouchableHighlightProps<TStyleName>;
export type TTouchableOpacityProps<TStyleName extends string> =
  TRNSTouchableOpacityProps<TStyleName>;

export type TIconProps<TStyleName extends string> = TRNSIconProps<TStyleName>;

export type TImageProps<TStyleName extends string> = TRNSImageProps<TStyleName>;
export type TImageBackgroundProps<TStyleName extends string> =
  TRNSImageBackgroundProps<TStyleName>;

export type TSafeAreaViewProps<TStyleName extends string> =
  TRNSSafeAreaViewProps<TStyleName>;

export type TScrollViewProps<
  TScrollViewStyle extends string,
  TScrollViewContentContainerStyle extends string,
> = TRNSScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>;

export type TTextProps<TStyleName extends string> = TRNSTextProps<TStyleName>;

export type TTextInputProps<TStyleName extends string> =
  TRNSTextInputProps<TStyleName>;

export type TViewProps<TStyleName extends string> = TRNSViewProps<TStyleName>;
