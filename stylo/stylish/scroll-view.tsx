import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';
import {
  TStylesProps,
  useScrollViewStyles,
  useScrollViewContentContainerStyles,
} from '../stylers';

export type TScrollViewProps<
  TScrollViewStyle extends string,
  TScrollViewContentContainerStyle extends string,
> = ScrollViewProps &
  TStylesProps<TScrollViewStyle> & {
    contentContainerStyleNamespace?: string | undefined;
    contentContainerStyleNames?: TScrollViewContentContainerStyle[] | undefined;
  };

const RNSScrollView = <
  TScrollViewStyle extends string,
  TScrollViewContentContainerStyle extends string,
>({
  styleNamespace,
  styleNames,
  style,
  contentContainerStyleNamespace,
  contentContainerStyleNames,
  contentContainerStyle,
  ...props
}: TScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>) => {
  const scrollViewStyle = useScrollViewStyles<TScrollViewStyle>(
    styleNames,
    styleNamespace ?? 'ScrollViewStyles',
  );

  const scrollViewContentContainerStyle =
    useScrollViewContentContainerStyles<TScrollViewContentContainerStyle>(
      contentContainerStyleNames,
      contentContainerStyleNamespace ?? 'ScrollViewContentContainerStyles',
    );

  return (
    <ScrollView
      {...props}
      style={[scrollViewStyle, style]}
      contentContainerStyle={[
        scrollViewContentContainerStyle,
        contentContainerStyle,
      ]}
    />
  );
};

export default RNSScrollView;
