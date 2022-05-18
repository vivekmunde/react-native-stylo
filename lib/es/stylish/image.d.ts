/// <reference types="react" />
import { ImageProps } from 'react-native';
import { TStylesProps } from '../stylers';
export declare type TImageProps<T extends string> = ImageProps & TStylesProps<T>;
declare const RNSImage: <T extends string>({ styleNamespace, styleNames, style, ...props }: TImageProps<T>) => JSX.Element;
export default RNSImage;
