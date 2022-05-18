import React from 'react';
import { Text, TextProps } from 'react-native';
import { TStylesProps, useTextStyles } from '../stylers';

export type TTextProps<T extends string> = TextProps & TStylesProps<T>;

const RNSText = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTextProps<T>) => {
  const textStyle = useTextStyles<T>(
    styleNames,
    styleNamespace ?? 'TextStyles',
  );
  return <Text {...props} style={[textStyle, style]} />;
};

export default RNSText;
