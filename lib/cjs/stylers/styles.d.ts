import React from 'react';
import { StyleProp } from 'react-native';
declare type TProps<TStyleProp, TStyleName extends string, TStyleNamespace extends string> = {
    styleNamespace: TStyleNamespace;
    styleNames: TStyleName[];
    children: (style: StyleProp<TStyleProp>) => React.ReactElement | null;
};
declare const Styles: <TStyleProp, TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: TProps<TStyleProp, TStyleName, TStyleNamespace>) => React.ReactElement | null;
export default Styles;
