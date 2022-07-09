/// <reference types="react" />
import { ImageBackgroundProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TImageBackgroundProps<TStyleName extends string> = ImageBackgroundProps & TStylesProps<TStyleName>;
declare const RNSImageBackground: <TStyleName extends string>({ styleNames, style, ...props }: TImageBackgroundProps<TStyleName>) => JSX.Element;
export default RNSImageBackground;
