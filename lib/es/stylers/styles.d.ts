import React from 'react';
import { StyleProp } from 'react-native';
import { TStyleNamespace } from './types';
declare type TProps<TStyleProp, TStyleName extends string> = {
    styleNamespace: TStyleNamespace;
    styleNames: TStyleName[];
    children: (style: StyleProp<TStyleProp>) => React.ReactElement | null;
};
declare const Styles: <TStyleProp, TStyleName extends string>({ styleNamespace, styleNames, children, }: TProps<TStyleProp, TStyleName>) => React.ReactElement | null;
export default Styles;
