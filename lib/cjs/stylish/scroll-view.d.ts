/// <reference types="react" />
import { ScrollViewProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TScrollViewProps<TScrollViewStyle extends string, TScrollViewContentContainerStyle extends string> = ScrollViewProps & TStylesProps<TScrollViewStyle> & {
    contentContainerStyleNames?: TScrollViewContentContainerStyle[];
};
declare const RNSScrollView: <TScrollViewStyle extends string, TScrollViewContentContainerStyle extends string>({ styleNames, style, contentContainerStyleNames, contentContainerStyle, ...props }: TScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>) => JSX.Element;
export default RNSScrollView;
