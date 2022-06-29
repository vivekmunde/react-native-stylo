import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

import {
  useScrollViewContentContainerStyles,
  useScrollViewStyles,
} from '../stylers';
import { TStylesProps } from './types';

export type TScrollViewProps<
  TScrollViewStyle extends string,
  TScrollViewStyleNamespace extends string,
  TScrollViewContentContainerStyle extends string,
  TScrollViewContentContainerStyleNamespace extends string,
> = ScrollViewProps &
  TStylesProps<TScrollViewStyle, TScrollViewStyleNamespace> & {
    contentContainerStyleNamespace?: TScrollViewContentContainerStyleNamespace;
    contentContainerStyleNames?: TScrollViewContentContainerStyle[];
  };

const RNSScrollView = <
  TScrollViewStyle extends string,
  TScrollViewStyleNamespace extends string,
  TScrollViewContentContainerStyle extends string,
  TScrollViewContentContainerStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  style,
  contentContainerStyleNamespace,
  contentContainerStyleNames,
  contentContainerStyle,
  ...props
}: TScrollViewProps<
  TScrollViewStyle,
  TScrollViewStyleNamespace,
  TScrollViewContentContainerStyle,
  TScrollViewContentContainerStyleNamespace
>) => {
  const scrollViewStyle = useScrollViewStyles<
    TScrollViewStyle,
    TScrollViewStyleNamespace
  >(
    styleNames ?? [],
    styleNamespace ?? ('ScrollViewStyles' as TScrollViewStyleNamespace),
  );

  const scrollViewContentContainerStyle = useScrollViewContentContainerStyles<
    TScrollViewContentContainerStyle,
    TScrollViewContentContainerStyleNamespace
  >(
    contentContainerStyleNames ?? [],
    contentContainerStyleNamespace ??
      ('ScrollViewContentContainerStyles' as TScrollViewContentContainerStyleNamespace),
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
