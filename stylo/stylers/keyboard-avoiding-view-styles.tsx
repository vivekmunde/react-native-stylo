import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import useKeyboardAvoidingViewStyles from './use-keyboard-avoiding-view-styles';

type TProps<T extends string> = {
  styleNamespace?: string;
  styleNames?: T[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

const KeyboardAvoidingViewStyles = <T extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<T>): React.ReactElement | null => {
  const style = useKeyboardAvoidingViewStyles<T>(styleNames, styleNamespace);
  return children(style);
};

export default KeyboardAvoidingViewStyles;
