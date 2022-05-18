import React from 'react';
import { View, ViewProps } from 'react-native';
import { TStylesProps, useViewStyles } from '../stylers';

export type TViewProps<T extends string> = ViewProps & TStylesProps<T>;

const RNSView = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TViewProps<T>) => {
  const viewStyle = useViewStyles<T>(
    styleNames,
    styleNamespace ?? 'ViewStyles',
  );
  return <View {...props} style={[viewStyle, style]} />;
};

export default RNSView;
