import React from 'react';
import { StyleProp, ImageStyle } from 'react-native';
declare type TProps<T extends string> = {
    styleNamespace?: string;
    styleNames?: T[];
    children: (style: StyleProp<ImageStyle>) => React.ReactElement | null;
};
declare const ImageStyles: <T extends string>({ styleNamespace, styleNames, children, }: TProps<T>) => React.ReactElement | null;
export default ImageStyles;
