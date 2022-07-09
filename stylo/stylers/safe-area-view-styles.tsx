import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import useSafeAreaViewStyles from './use-safe-area-view-styles';

type TProps<TStyleName extends string> = {
  styleNames: TStyleName[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

const SafeAreaViewStyles = <TStyleName extends string>({
  styleNames,
  children,
}: TProps<TStyleName>): React.ReactElement | null => {
  const style = useSafeAreaViewStyles<TStyleName>(styleNames);
  return children(style);
};

export default SafeAreaViewStyles;
