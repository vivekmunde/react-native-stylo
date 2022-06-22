/// <reference types="react" />
import { ViewProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TViewProps<TStyleName extends string, TStyleNamespace extends string> = ViewProps & TStylesProps<TStyleName, TStyleNamespace>;
declare const RNSView: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TViewProps<TStyleName, TStyleNamespace>) => JSX.Element;
export default RNSView;
