import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type TProps<T extends string> = {
    styleNamespace?: string;
    styleNames?: T[];
    children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};
declare const SafeAreaViewStyles: <T extends string>({ styleNamespace, styleNames, children, }: TProps<T>) => React.ReactElement | null;
export default SafeAreaViewStyles;
