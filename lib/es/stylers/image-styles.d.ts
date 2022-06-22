import React from 'react';
import { StyleProp, ImageStyle } from 'react-native';
declare type TProps<TStyleName extends string, TStyleNamespace extends string> = {
    styleNamespace?: TStyleNamespace;
    styleNames: TStyleName[];
    children: (style: StyleProp<ImageStyle>) => React.ReactElement | null;
};
declare const ImageStyles: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, children, }: TProps<TStyleName, TStyleNamespace>) => React.ReactElement | null;
export default ImageStyles;
