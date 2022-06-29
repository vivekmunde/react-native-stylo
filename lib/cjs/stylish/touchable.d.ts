/// <reference types="react" />
import { PressableProps, TouchableHighlightProps, TouchableOpacityProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TPressableProps<TStyleName extends string, TStyleNamespace extends string> = PressableProps & TStylesProps<TStyleName, TStyleNamespace>;
export declare const Pressable: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TPressableProps<TStyleName, TStyleNamespace>) => JSX.Element;
export declare type TTouchableHighlightProps<TStyleName extends string, TStyleNamespace extends string> = TouchableHighlightProps & TStylesProps<TStyleName, TStyleNamespace>;
export declare const TouchableHighlight: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TTouchableHighlightProps<TStyleName, TStyleNamespace>) => JSX.Element;
export declare type TTouchableOpacityProps<TStyleName extends string, TStyleNamespace extends string> = TouchableOpacityProps & TStylesProps<TStyleName, TStyleNamespace>;
export declare const TouchableOpacity: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TTouchableOpacityProps<TStyleName, TStyleNamespace>) => JSX.Element;
