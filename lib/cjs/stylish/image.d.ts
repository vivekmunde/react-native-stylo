/// <reference types="react" />
import { ImageProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TImageProps<TStyleName extends string> = ImageProps & TStylesProps<TStyleName>;
declare const RNSImage: <TStyleName extends string>({ styleNames, style, ...props }: TImageProps<TStyleName>) => JSX.Element;
export default RNSImage;
