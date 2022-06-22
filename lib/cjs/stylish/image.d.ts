/// <reference types="react" />
import { ImageProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TImageProps<TStyleName extends string, TStyleNamespace extends string> = ImageProps & TStylesProps<TStyleName, TStyleNamespace>;
declare const RNSImage: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TImageProps<TStyleName, TStyleNamespace>) => JSX.Element;
export default RNSImage;
