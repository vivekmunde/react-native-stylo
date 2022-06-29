/// <reference types="react" />
import { ScrollViewProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TScrollViewProps<TScrollViewStyle extends string, TScrollViewStyleNamespace extends string, TScrollViewContentContainerStyle extends string, TScrollViewContentContainerStyleNamespace extends string> = ScrollViewProps & TStylesProps<TScrollViewStyle, TScrollViewStyleNamespace> & {
    contentContainerStyleNamespace?: TScrollViewContentContainerStyleNamespace;
    contentContainerStyleNames?: TScrollViewContentContainerStyle[];
};
declare const RNSScrollView: <TScrollViewStyle extends string, TScrollViewStyleNamespace extends string, TScrollViewContentContainerStyle extends string, TScrollViewContentContainerStyleNamespace extends string>({ styleNamespace, styleNames, style, contentContainerStyleNamespace, contentContainerStyleNames, contentContainerStyle, ...props }: TScrollViewProps<TScrollViewStyle, TScrollViewStyleNamespace, TScrollViewContentContainerStyle, TScrollViewContentContainerStyleNamespace>) => JSX.Element;
export default RNSScrollView;
