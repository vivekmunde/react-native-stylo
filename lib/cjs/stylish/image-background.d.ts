/// <reference types="react" />
import { ImageBackgroundProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TImageBackgroundProps<TStyleName extends string, TStyleNamespace extends string> = ImageBackgroundProps & TStylesProps<TStyleName, TStyleNamespace>;
declare const RNSImageBackground: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TImageBackgroundProps<TStyleName, TStyleNamespace>) => JSX.Element;
export default RNSImageBackground;
