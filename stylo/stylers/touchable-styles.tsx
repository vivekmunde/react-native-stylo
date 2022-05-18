import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import useTouchableStyles from './use-touchable-styles';

type TProps<T extends string> = {
  styleNamespace?: string;
  styleNames?: T[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

const TouchableStyles = <T extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<T>): React.ReactElement | null => {
  const style = useTouchableStyles<T>(styleNames, styleNamespace);
  return children(style);
};

export default TouchableStyles;
