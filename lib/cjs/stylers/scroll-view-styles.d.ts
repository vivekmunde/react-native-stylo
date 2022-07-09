import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type TProps<TStyleName extends string> = {
    styleNames: TStyleName[];
    children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};
export declare const ScrollViewStyles: <TStyleName extends string>({ styleNames, children, }: TProps<TStyleName>) => React.ReactElement | null;
declare type TContentContainerProps<TStyleName extends string> = {
    styleNames: TStyleName[];
    children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};
export declare const ScrollViewContentContainerStyles: <TStyleName extends string>({ styleNames, children, }: TContentContainerProps<TStyleName>) => React.ReactElement | null;
export {};
