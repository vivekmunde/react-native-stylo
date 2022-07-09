/// <reference types="react" />
import { ViewProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TViewProps<TStyleName extends string> = ViewProps & TStylesProps<TStyleName>;
declare const RNSView: <TStyleName extends string>({ styleNames, style, ...props }: TViewProps<TStyleName>) => JSX.Element;
export default RNSView;
