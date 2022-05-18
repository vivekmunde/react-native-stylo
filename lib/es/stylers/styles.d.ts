import React from 'react';
import { StyleProp } from 'react-native';
declare type TProps<TStyleProp, TStyleName extends string> = {
    styleNamespace?: string;
    styleNames?: TStyleName[];
    children: (style: StyleProp<TStyleProp>) => React.ReactElement | null;
};
declare const Styles: <TStyleProp, TStyleName extends string>({ styleNamespace, styleNames, children, }: TProps<TStyleProp, TStyleName>) => React.ReactElement | null;
export default Styles;
