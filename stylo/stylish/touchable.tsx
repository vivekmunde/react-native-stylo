import React from 'react';
import {
  Pressable as RNPressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TouchableHighlight as RNTouchableHighlight,
  TouchableHighlightProps,
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { useTouchableStyles } from '../stylers';
import { TStylesProps } from './types';

export type TPressableProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = PressableProps & TStylesProps<TStyleName, TStyleNamespace>;

export const Pressable = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TPressableProps<TStyleName, TStyleNamespace>) => {
  const viewStyle = useTouchableStyles<TStyleName, TStyleNamespace>(
    styleNames ?? [],
    styleNamespace ?? ('TouchableStyles' as TStyleNamespace),
  );

  const pressableFunctionStyle =
    typeof style === 'function'
      ? (args: PressableStateCallbackType) => style(args)
      : undefined;

  return (
    <RNPressable
      {...props}
      style={[
        viewStyle,
        pressableFunctionStyle !== undefined
          ? (pressableFunctionStyle as StyleProp<ViewStyle>)
          : (style as StyleProp<ViewStyle>),
      ]}
    />
  );
};

export type TTouchableHighlightProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TouchableHighlightProps & TStylesProps<TStyleName, TStyleNamespace>;

export const TouchableHighlight = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTouchableHighlightProps<TStyleName, TStyleNamespace>) => {
  const viewStyle = useTouchableStyles<TStyleName, TStyleNamespace>(
    styleNames ?? [],
    styleNamespace ?? ('TouchableStyles' as TStyleNamespace),
  );
  return <RNTouchableHighlight {...props} style={[viewStyle, style]} />;
};

export type TTouchableOpacityProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = TouchableOpacityProps & TStylesProps<TStyleName, TStyleNamespace>;

export const TouchableOpacity = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTouchableOpacityProps<TStyleName, TStyleNamespace>) => {
  const viewStyle = useTouchableStyles<TStyleName, TStyleNamespace>(
    styleNames ?? [],
    styleNamespace ?? ('TouchableStyles' as TStyleNamespace),
  );
  return <RNTouchableOpacity {...props} style={[viewStyle, style]} />;
};
