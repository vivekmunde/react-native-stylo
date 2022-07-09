/// <reference types="react" />
import { PressableProps, TouchableHighlightProps, TouchableOpacityProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TPressableProps<TStyleName extends string> = PressableProps & TStylesProps<TStyleName>;
export declare const Pressable: <TStyleName extends string>({ styleNames, style, ...props }: TPressableProps<TStyleName>) => JSX.Element;
export declare type TTouchableHighlightProps<TStyleName extends string> = TouchableHighlightProps & TStylesProps<TStyleName>;
export declare const TouchableHighlight: <TStyleName extends string>({ styleNames, style, ...props }: TTouchableHighlightProps<TStyleName>) => JSX.Element;
export declare type TTouchableOpacityProps<TStyleName extends string> = TouchableOpacityProps & TStylesProps<TStyleName>;
export declare const TouchableOpacity: <TStyleName extends string>({ styleNames, style, ...props }: TTouchableOpacityProps<TStyleName>) => JSX.Element;
