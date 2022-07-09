import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import useIconStyles from './use-icon-styles';

type TProps<TStyleName extends string> = {
  styleNames: TStyleName[];
  children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};

const IconStyles = <TStyleName extends string>({
  styleNames,
  children,
}: TProps<TStyleName>): React.ReactElement | null => {
  const style = useIconStyles<TStyleName>(styleNames);
  return children(style);
};

export default IconStyles;
