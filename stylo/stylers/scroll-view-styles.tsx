import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  useScrollViewStyles,
  useScrollViewContentContainerStyles,
} from './use-scroll-view-styles';

type TProps<TStyleName extends string, TStyleNamespace extends string> = {
  styleNamespace?: TStyleNamespace;
  styleNames: TStyleName[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

export const ScrollViewStyles = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  children,
}: TProps<TStyleName, TStyleNamespace>): React.ReactElement | null => {
  const style = useScrollViewStyles<TStyleName, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );
  return children(style);
};

type TContentContainerProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = {
  styleNamespace?: TStyleNamespace;
  styleNames: TStyleName[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

export const ScrollViewContentContainerStyles = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  children,
}: TContentContainerProps<
  TStyleName,
  TStyleNamespace
>): React.ReactElement | null => {
  const style = useScrollViewContentContainerStyles<
    TStyleName,
    TStyleNamespace
  >(styleNames, styleNamespace);
  return children(style);
};
