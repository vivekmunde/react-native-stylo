import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { TStylesProps, useTextInputStyles } from '../stylers';

export type TTextInputProps<T extends string> = TextInputProps &
  TStylesProps<T>;

const RNSTextInput = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTextInputProps<T>) => {
  const textInputStyle = useTextInputStyles<T>(
    styleNames,
    styleNamespace ?? 'TextInputStyles',
  );
  return <TextInput {...props} style={[textInputStyle, style]} />;
};

export default RNSTextInput;
