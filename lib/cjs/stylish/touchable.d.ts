/// <reference types="react" />
import { PressableProps, TouchableHighlightProps, TouchableOpacityProps } from 'react-native';
import { TStylesProps } from '../stylers';
export declare type TPressableProps<T extends string> = PressableProps & TStylesProps<T>;
export declare const Pressable: <T extends string>({ styleNamespace, styleNames, style, ...props }: TPressableProps<T>) => JSX.Element;
export declare type TTouchableHighlightProps<T extends string> = TouchableHighlightProps & TStylesProps<T>;
export declare const TouchableHighlight: <T extends string>({ styleNamespace, styleNames, style, ...props }: TTouchableHighlightProps<T>) => JSX.Element;
export declare type TTouchableOpacityProps<T extends string> = TouchableOpacityProps & TStylesProps<T>;
export declare const TouchableOpacity: <T extends string>({ styleNamespace, styleNames, style, ...props }: TTouchableOpacityProps<T>) => JSX.Element;
