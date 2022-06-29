import React from 'react';
import { SafeAreaView, ViewProps } from 'react-native';

import { useViewStyles } from '../stylers';
import { TStylesProps } from './types';

export type TSafeAreaViewProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = ViewProps & TStylesProps<TStyleName, TStyleNamespace>;

const RNSSafeAreaView = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TSafeAreaViewProps<TStyleName, TStyleNamespace>) => {
  const viewStyle = useViewStyles<TStyleName, TStyleNamespace>(
    styleNames ?? [],
    styleNamespace ?? ('SafeAreaViewStyles' as TStyleNamespace),
  );
  return <SafeAreaView {...props} style={[viewStyle, style]} />;
};

export default RNSSafeAreaView;
