/// <reference types="react" />
import { ViewProps } from 'react-native';
import { TStylesProps } from '../stylers';
export declare type TSafeAreaViewProps<T extends string> = ViewProps & TStylesProps<T>;
declare const RNSSafeAreaView: <T extends string>({ styleNamespace, styleNames, style, ...props }: TSafeAreaViewProps<T>) => JSX.Element;
export default RNSSafeAreaView;
