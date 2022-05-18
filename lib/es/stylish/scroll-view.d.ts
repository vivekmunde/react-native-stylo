/// <reference types="react" />
import { ScrollViewProps } from 'react-native';
import { TStylesProps } from '../stylers';
export declare type TScrollViewProps<TScrollViewStyle extends string, TScrollViewContentContainerStyle extends string> = ScrollViewProps & TStylesProps<TScrollViewStyle> & {
    contentContainerStyleNamespace?: string | undefined;
    contentContainerStyleNames?: TScrollViewContentContainerStyle[] | undefined;
};
declare const RNSScrollView: <TScrollViewStyle extends string, TScrollViewContentContainerStyle extends string>({ styleNamespace, styleNames, style, contentContainerStyleNamespace, contentContainerStyleNames, contentContainerStyle, ...props }: TScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>) => JSX.Element;
export default RNSScrollView;
