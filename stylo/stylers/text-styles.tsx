import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import useTextStyles from './use-text-styles';

type TProps<TStyleName extends string> = {
  styleNames: TStyleName[];
  children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};

const TextStyles = <TStyleName extends string>({
  styleNames,
  children,
}: TProps<TStyleName>): React.ReactElement | null => {
  const style = useTextStyles<TStyleName>(styleNames ?? []);
  return children(style);
};

export default TextStyles;
