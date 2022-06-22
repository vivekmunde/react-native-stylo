/// <reference types="react" />
import { TextProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TTextProps<TStyleName extends string, TStyleNamespace extends string> = TextProps & TStylesProps<TStyleName, TStyleNamespace>;
declare const RNSText: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TTextProps<TStyleName, TStyleNamespace>) => JSX.Element;
export default RNSText;
