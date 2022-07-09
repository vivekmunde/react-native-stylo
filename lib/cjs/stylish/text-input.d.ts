/// <reference types="react" />
import { TextInputProps } from 'react-native';
import { TStylesProps } from './types';
export declare type TTextInputProps<TStyleName extends string> = TextInputProps & TStylesProps<TStyleName>;
declare const RNSTextInput: <TStyleName extends string>({ styleNames, style, ...props }: TTextInputProps<TStyleName>) => JSX.Element;
export default RNSTextInput;
