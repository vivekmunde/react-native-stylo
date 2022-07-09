import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import useTextInputStyles from './use-text-input-styles';

type TProps<TStyleName extends string> = {
  styleNames: TStyleName[];
  children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};

const TextInputStyles = <TStyleName extends string>({
  styleNames,
  children,
}: TProps<TStyleName>): React.ReactElement | null => {
  const style = useTextInputStyles<TStyleName>(styleNames);
  return children(style);
};

export default TextInputStyles;
