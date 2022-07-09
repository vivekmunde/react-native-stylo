import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import {
  useScrollViewContentContainerStyles,
  useScrollViewStyles,
} from './use-scroll-view-styles';

type TProps<TStyleName extends string> = {
  styleNames: TStyleName[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

export const ScrollViewStyles = <TStyleName extends string>({
  styleNames,
  children,
}: TProps<TStyleName>): React.ReactElement | null => {
  const style = useScrollViewStyles<TStyleName>(styleNames);
  return children(style);
};

type TContentContainerProps<TStyleName extends string> = {
  styleNames: TStyleName[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

export const ScrollViewContentContainerStyles = <TStyleName extends string>({
  styleNames,
  children,
}: TContentContainerProps<TStyleName>): React.ReactElement | null => {
  const style = useScrollViewContentContainerStyles<TStyleName>(styleNames);
  return children(style);
};
