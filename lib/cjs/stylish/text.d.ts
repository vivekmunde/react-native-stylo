/// <reference types="react" />
import { TextProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TTextProps<TStyleName extends string> = TextProps & TStylesProps<TStyleName>;
declare const RNSText: <TStyleName extends string>({ styleNames, style, ...props }: TTextProps<TStyleName>) => JSX.Element;
export default RNSText;
