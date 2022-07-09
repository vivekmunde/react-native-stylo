/// <reference types="react" />
import { ViewProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TSafeAreaViewProps<TStyleName extends string> = ViewProps & TStylesProps<TStyleName>;
declare const RNSSafeAreaView: <TStyleName extends string>({ styleNames, style, ...props }: TSafeAreaViewProps<TStyleName>) => JSX.Element;
export default RNSSafeAreaView;
