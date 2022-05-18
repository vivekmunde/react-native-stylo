/// <reference types="react" />
import { ImageBackgroundProps } from 'react-native';
import { TStylesProps } from '../stylers';
export declare type TImageBackgroundProps<T extends string> = ImageBackgroundProps & TStylesProps<T>;
declare const RNSImageBackground: <T extends string>({ styleNamespace, styleNames, style, ...props }: TImageBackgroundProps<T>) => JSX.Element;
export default RNSImageBackground;
