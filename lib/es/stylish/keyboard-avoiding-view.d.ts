/// <reference types="react" />
import { KeyboardAvoidingViewProps } from 'react-native';
import { TStylesProps } from '../stylers';
export declare type TKeyboardAvoidingViewProps<T extends string> = KeyboardAvoidingViewProps & TStylesProps<T>;
declare const RNSKeyboardAvoidingView: <T extends string>({ styleNamespace, styleNames, style, ...props }: TKeyboardAvoidingViewProps<T>) => JSX.Element;
export default RNSKeyboardAvoidingView;
