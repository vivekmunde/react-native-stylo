import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { useTextInputStyles } from '../stylers';
import { TStylesProps } from './types';

export type TTextInputProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TextInputProps & TStylesProps<TStyleName, TStyleNamespace>;

const RNSTextInput = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTextInputProps<TStyleName, TStyleNamespace>) => {
  const textInputStyle = useTextInputStyles<TStyleName, TStyleNamespace>(
    styleNames ?? [],
    styleNamespace ?? ('TextInputStyles' as TStyleNamespace),
  );
  return <TextInput {...props} style={[textInputStyle, style]} />;
};

export default RNSTextInput;
