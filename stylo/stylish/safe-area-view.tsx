import React from 'react';
import { SafeAreaView, ViewProps } from 'react-native';
import { TStylesProps, useViewStyles } from '../stylers';

export type TSafeAreaViewProps<T extends string> = ViewProps & TStylesProps<T>;

const RNSSafeAreaView = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TSafeAreaViewProps<T>) => {
  const viewStyle = useViewStyles<T>(
    styleNames,
    styleNamespace ?? 'SafeAreaViewStyles',
  );
  return <SafeAreaView {...props} style={[viewStyle, style]} />;
};

export default RNSSafeAreaView;
