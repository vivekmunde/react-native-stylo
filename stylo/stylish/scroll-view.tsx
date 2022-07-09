import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

import {
  useScrollViewContentContainerStyles,
  useScrollViewStyles,
} from '../stylers';
import { TStylesProps } from './types';

export type TScrollViewProps<
  TScrollViewStyle extends string,
  TScrollViewContentContainerStyle extends string,
> = ScrollViewProps &
  TStylesProps<TScrollViewStyle> & {
    contentContainerStyleNames?: TScrollViewContentContainerStyle[];
  };

const RNSScrollView = <
  TScrollViewStyle extends string,
  TScrollViewContentContainerStyle extends string,
>({
  styleNames,
  style,
  contentContainerStyleNames,
  contentContainerStyle,
  ...props
}: TScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>) => {
  const scrollViewStyle = useScrollViewStyles<TScrollViewStyle>(
    styleNames ?? [],
  );

  const scrollViewContentContainerStyle =
    useScrollViewContentContainerStyles<TScrollViewContentContainerStyle>(
      contentContainerStyleNames ?? [],
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
