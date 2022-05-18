import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import useSafeAreaViewStyles from './use-safe-area-view-styles';

type TProps<T extends string> = {
  styleNamespace?: string;
  styleNames?: T[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

const SafeAreaViewStyles = <T extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<T>): React.ReactElement | null => {
  const style = useSafeAreaViewStyles<T>(styleNames, styleNamespace);
  return children(style);
};

export default SafeAreaViewStyles;
