import React from 'react';
import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from 'react-native';
import { TStylesProps, useKeyboardAvoidingViewStyles } from '../stylers';

export type TKeyboardAvoidingViewProps<T extends string> =
  KeyboardAvoidingViewProps & TStylesProps<T>;

const RNSKeyboardAvoidingView = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TKeyboardAvoidingViewProps<T>) => {
  const keyboardAvoidingViewStyle = useKeyboardAvoidingViewStyles<T>(
    styleNames,
    styleNamespace ?? 'KeyboardAvoidingViewStyles',
  );
  return (
    <KeyboardAvoidingView
      {...props}
      style={[keyboardAvoidingViewStyle, style]}
    />
  );
};

export default RNSKeyboardAvoidingView;
