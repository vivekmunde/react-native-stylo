import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
declare type TProps<T extends string> = {
    styleNamespace?: string;
    styleNames?: T[];
    children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};
declare const TextInputStyles: <T extends string>({ styleNamespace, styleNames, children, }: TProps<T>) => React.ReactElement | null;
export default TextInputStyles;
