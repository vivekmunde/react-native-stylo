import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import useViewStyles from './use-view-styles';

type TProps<T extends string> = {
  styleNamespace?: string;
  styleNames?: T[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

const ViewStyles = <T extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<T>): React.ReactElement | null => {
  const style = useViewStyles<T>(styleNames, styleNamespace);
  return children(style);
};

export default ViewStyles;
