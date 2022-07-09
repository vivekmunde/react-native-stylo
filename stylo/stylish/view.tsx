import React from 'react';
import { View, ViewProps } from 'react-native';

import { useViewStyles } from '../stylers';
import { TStylesProps } from './types';

export type TViewProps<TStyleName extends string> = ViewProps &
  TStylesProps<TStyleName>;

const RNSView = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TViewProps<TStyleName>) => {
  const viewStyle = useViewStyles<TStyleName>(styleNames ?? []);
  return <View {...props} style={[viewStyle, style]} />;
};

export default RNSView;
