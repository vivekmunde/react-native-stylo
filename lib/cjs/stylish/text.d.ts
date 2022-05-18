/// <reference types="react" />
import { TextProps } from 'react-native';
import { TStylesProps } from '../stylers';
export declare type TTextProps<T extends string> = TextProps & TStylesProps<T>;
declare const RNSText: <T extends string>({ styleNamespace, styleNames, style, ...props }: TTextProps<T>) => JSX.Element;
export default RNSText;
