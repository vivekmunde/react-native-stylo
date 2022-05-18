import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import useTextStyles from './use-text-styles';

type TProps<T extends string> = {
  styleNamespace?: string;
  styleNames?: T[];
  children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};

const TextStyles = <T extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<T>): React.ReactElement | null => {
  const style = useTextStyles<T>(styleNames, styleNamespace);
  return children(style);
};

export default TextStyles;
