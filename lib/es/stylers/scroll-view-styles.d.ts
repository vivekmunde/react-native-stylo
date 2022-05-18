import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type TProps<T extends string> = {
    styleNamespace?: string;
    styleNames?: T[];
    children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};
export declare const ScrollViewStyles: <T extends string>({ styleNamespace, styleNames, children, }: TProps<T>) => React.ReactElement | null;
declare type TContentContainerProps<T extends string> = {
    styleNamespace?: string;
    styleNames?: T[];
    children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};
export declare const ScrollViewContentContainerStyles: <T extends string>({ styleNamespace, styleNames, children, }: TContentContainerProps<T>) => React.ReactElement | null;
export {};
