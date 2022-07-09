import React from 'react';
import { Text, TextProps } from 'react-native';

import { useTextStyles } from '../stylers';
import { TStylesProps } from './types';

export type TTextProps<TStyleName extends string> = TextProps &
  TStylesProps<TStyleName>;

const RNSText = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TTextProps<TStyleName>) => {
  const textStyle = useTextStyles<TStyleName>(styleNames ?? []);
  return <Text {...props} style={[textStyle, style]} />;
};

export default RNSText;
