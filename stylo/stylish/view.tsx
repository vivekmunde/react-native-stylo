import React from 'react';
import { View, ViewProps } from 'react-native';

import { useViewStyles } from '../stylers';
import { TStylesProps } from './types';

export type TViewProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = ViewProps & TStylesProps<TStyleName, TStyleNamespace>;

const RNSView = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TViewProps<TStyleName, TStyleNamespace>) => {
  const viewStyle = useViewStyles<TStyleName, TStyleNamespace>(
    styleNames ?? [],
    styleNamespace ?? ('ViewStyles' as TStyleNamespace),
  );
  return <View {...props} style={[viewStyle, style]} />;
};

export default RNSView;
