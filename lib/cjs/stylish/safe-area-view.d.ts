/// <reference types="react" />
import { ViewProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TSafeAreaViewProps<TStyleName extends string, TStyleNamespace extends string> = ViewProps & TStylesProps<TStyleName, TStyleNamespace>;
declare const RNSSafeAreaView: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TSafeAreaViewProps<TStyleName, TStyleNamespace>) => JSX.Element;
export default RNSSafeAreaView;
