import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import useSafeAreaViewStyles from './use-safe-area-view-styles';

type TProps<TStyleName extends string, TStyleNamespace extends string> = {
  styleNamespace?: TStyleNamespace;
  styleNames: TStyleName[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

const SafeAreaViewStyles = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  children,
}: TProps<TStyleName, TStyleNamespace>): React.ReactElement | null => {
  const style = useSafeAreaViewStyles<TStyleName, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );
  return children(style);
};

export default SafeAreaViewStyles;
