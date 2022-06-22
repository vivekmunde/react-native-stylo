import React from 'react';
import { Text, TextProps } from 'react-native';

import { useTextStyles } from '../stylers';
import { TStylesProps } from './types';

export type TTextProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TextProps & TStylesProps<TStyleName, TStyleNamespace>;

const RNSText = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTextProps<TStyleName, TStyleNamespace>) => {
  const textStyle = useTextStyles<TStyleName, TStyleNamespace>(
    styleNames ?? [],
    styleNamespace ?? ('TextStyles' as TStyleNamespace),
  );
  return <Text {...props} style={[textStyle, style]} />;
};

export default RNSText;
