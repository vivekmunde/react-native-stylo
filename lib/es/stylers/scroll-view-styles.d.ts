import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type TProps<TStyleName extends string, TStyleNamespace extends string> = {
    styleNamespace?: TStyleNamespace;
    styleNames: TStyleName[];
    children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};
export declare const ScrollViewStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: TProps<TStyleName, TStyleNamespace>) => React.ReactElement | null;
declare type TContentContainerProps<TStyleName extends string, TStyleNamespace extends string> = {
    styleNamespace?: TStyleNamespace;
    styleNames: TStyleName[];
    children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};
export declare const ScrollViewContentContainerStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: TContentContainerProps<TStyleName, TStyleNamespace>) => React.ReactElement | null;
export {};
