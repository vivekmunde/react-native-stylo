import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import useIconStyles from './use-icon-styles';

type TProps<TStyleName extends string, TStyleNamespace extends string> = {
  styleNamespace?: TStyleNamespace;
  styleNames: TStyleName[];
  children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};

const IconStyles = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<TStyleName, TStyleNamespace>): React.ReactElement | null => {
  const style = useIconStyles<TStyleName, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );
  return children(style);
};

export default IconStyles;
