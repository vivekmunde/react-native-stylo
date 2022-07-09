import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import useTouchableStyles from './use-touchable-styles';

type TProps<TStyleName extends string> = {
  styleNames: TStyleName[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

const TouchableStyles = <TStyleName extends string>({
  styleNames,
  children,
}: TProps<TStyleName>): React.ReactElement | null => {
  const style = useTouchableStyles<TStyleName>(styleNames);
  return children(style);
};

export default TouchableStyles;
