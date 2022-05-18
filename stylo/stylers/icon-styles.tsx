import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import useIconStyles from './use-icon-styles';

type TProps<T extends string> = {
  styleNamespace?: string;
  styleNames?: T[];
  children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};

const IconStyles = <T extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<T>): React.ReactElement | null => {
  const style = useIconStyles<T>(styleNames, styleNamespace);
  return children(style);
};

export default IconStyles;
