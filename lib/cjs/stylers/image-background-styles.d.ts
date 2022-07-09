import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type TProps<TStyleName extends string> = {
    styleNames: TStyleName[];
    children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};
declare const ImageBackgroundViewStyles: <TStyleName extends string>({ styleNames, children, }: TProps<TStyleName>) => React.ReactElement | null;
export default ImageBackgroundViewStyles;
