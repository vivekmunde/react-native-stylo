import React from 'react';
import { ImageStyle, StyleProp } from 'react-native';
declare type TProps<TStyleName extends string> = {
    styleNames: TStyleName[];
    children: (style: StyleProp<ImageStyle>) => React.ReactElement | null;
};
declare const ImageStyles: <TStyleName extends string>({ styleNames, children, }: TProps<TStyleName>) => React.ReactElement | null;
export default ImageStyles;
