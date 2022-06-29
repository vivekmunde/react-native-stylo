/// <reference types="react" />
import { KeyboardAvoidingViewProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TKeyboardAvoidingViewProps<TStyleName extends string, TStyleNamespace extends string> = KeyboardAvoidingViewProps & TStylesProps<TStyleName, TStyleNamespace>;
declare const RNSKeyboardAvoidingView: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TKeyboardAvoidingViewProps<TStyleName, TStyleNamespace>) => JSX.Element;
export default RNSKeyboardAvoidingView;
