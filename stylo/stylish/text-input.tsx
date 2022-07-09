import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { useTextInputStyles } from '../stylers';
import { TStylesProps } from './types';

export type TTextInputProps<TStyleName extends string> = TextInputProps &
  TStylesProps<TStyleName>;

const RNSTextInput = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TTextInputProps<TStyleName>) => {
  const textInputStyle = useTextInputStyles<TStyleName>(styleNames ?? []);
  return <TextInput {...props} style={[textInputStyle, style]} />;
};

export default RNSTextInput;
