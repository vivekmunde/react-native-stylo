import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  useScrollViewStyles,
  useScrollViewContentContainerStyles,
} from './use-scroll-view-styles';

type TProps<T extends string> = {
  styleNamespace?: string;
  styleNames?: T[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

export const ScrollViewStyles = <T extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<T>): React.ReactElement | null => {
  const style = useScrollViewStyles<T>(styleNames, styleNamespace);
  return children(style);
};

type TContentContainerProps<T extends string> = {
  styleNamespace?: string;
  styleNames?: T[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

export const ScrollViewContentContainerStyles = <T extends string>({
  styleNamespace,
  styleNames,
  children,
}: TContentContainerProps<T>): React.ReactElement | null => {
  const style = useScrollViewContentContainerStyles<T>(
    styleNames,
    styleNamespace,
  );
  return children(style);
};
