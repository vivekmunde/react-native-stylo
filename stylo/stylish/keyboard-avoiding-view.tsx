import React from 'react';
import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from 'react-native';

import { useKeyboardAvoidingViewStyles } from '../stylers';
import { TStylesProps } from './types';

export type TKeyboardAvoidingViewProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = KeyboardAvoidingViewProps & TStylesProps<TStyleName, TStyleNamespace>;

const RNSKeyboardAvoidingView = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TKeyboardAvoidingViewProps<TStyleName, TStyleNamespace>) => {
  const keyboardAvoidingViewStyle = useKeyboardAvoidingViewStyles<
    TStyleName,
    TStyleNamespace
  >(
    styleNames ?? [],
    styleNamespace ?? ('KeyboardAvoidingViewStyles' as TStyleNamespace),
  );
  return (
    <KeyboardAvoidingView
      {...props}
      style={[keyboardAvoidingViewStyle, style]}
    />
  );
};

export default RNSKeyboardAvoidingView;
