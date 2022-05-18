/// <reference types="react" />
import { ViewProps } from 'react-native';
import { TStylesProps } from '../stylers';
export declare type TViewProps<T extends string> = ViewProps & TStylesProps<T>;
declare const RNSView: <T extends string>({ styleNamespace, styleNames, style, ...props }: TViewProps<T>) => JSX.Element;
export default RNSView;
