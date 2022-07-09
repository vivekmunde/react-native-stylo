import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
declare type TProps<TStyleName extends string> = {
    styleNames: TStyleName[];
    children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};
declare const TextStyles: <TStyleName extends string>({ styleNames, children, }: TProps<TStyleName>) => React.ReactElement | null;
export default TextStyles;
