/// <reference types="react" />
import { TextInputProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TTextInputProps<TStyleName extends string, TStyleNamespace extends string> = TextInputProps & TStylesProps<TStyleName, TStyleNamespace>;
declare const RNSTextInput: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TTextInputProps<TStyleName, TStyleNamespace>) => JSX.Element;
export default RNSTextInput;
