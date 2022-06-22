import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type TProps<TStyleName extends string, TStyleNamespace extends string> = {
    styleNamespace?: TStyleNamespace;
    styleNames: TStyleName[];
    children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};
declare const ViewStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: TProps<TStyleName, TStyleNamespace>) => React.ReactElement | null;
export default ViewStyles;
