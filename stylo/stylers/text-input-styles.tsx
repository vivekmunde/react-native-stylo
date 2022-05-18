import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import useTextInputStyles from './use-text-input-styles';

type TProps<T extends string> = {
  styleNamespace?: string;
  styleNames?: T[];
  children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};

const TextInputStyles = <T extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<T>): React.ReactElement | null => {
  const style = useTextInputStyles<T>(styleNames, styleNamespace);
  return children(style);
};

export default TextInputStyles;
