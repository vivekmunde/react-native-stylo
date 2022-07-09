import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import useViewStyles from './use-view-styles';

type TProps<TStyleName extends string> = {
  styleNames: TStyleName[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

const ViewStyles = <TStyleName extends string>({
  styleNames,
  children,
}: TProps<TStyleName>): React.ReactElement | null => {
  const style = useViewStyles<TStyleName>(styleNames);
  return children(style);
};

export default ViewStyles;
