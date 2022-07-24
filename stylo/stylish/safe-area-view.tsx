import React from 'react';
import { SafeAreaView, ViewProps } from 'react-native';

import { useViewStyles } from '../stylers';
import { TStylesProps } from './types';

export type TSafeAreaViewProps<TStyleName extends string> = ViewProps &
  TStylesProps<TStyleName>;

const RNSSafeAreaView = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TSafeAreaViewProps<TStyleName>) => {
  const viewStyle = useViewStyles<TStyleName>(styleNames ?? []);
  return <SafeAreaView {...props} style={style ? [viewStyle, style] : viewStyle} />;
};

export default RNSSafeAreaView;
