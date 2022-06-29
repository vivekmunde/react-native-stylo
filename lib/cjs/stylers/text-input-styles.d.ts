import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
declare type TProps<TStyleName extends string, TStyleNamespace extends string> = {
    styleNamespace?: TStyleNamespace;
    styleNames: TStyleName[];
    children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};
declare const TextInputStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: TProps<TStyleName, TStyleNamespace>) => React.ReactElement | null;
export default TextInputStyles;
