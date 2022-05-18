/// <reference types="react" />
import { TextInputProps } from 'react-native';
import { TStylesProps } from '../stylers';
export declare type TTextInputProps<T extends string> = TextInputProps & TStylesProps<T>;
declare const RNSTextInput: <T extends string>({ styleNamespace, styleNames, style, ...props }: TTextInputProps<T>) => JSX.Element;
export default RNSTextInput;
