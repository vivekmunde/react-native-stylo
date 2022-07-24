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
  ViewStyle
} from 'react-native';

import { useTouchableStyles } from '../stylers';
import { TStylesProps } from './types';

export type TPressableProps<TStyleName extends string> = PressableProps &
  TStylesProps<TStyleName>;

export const Pressable = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TPressableProps<TStyleName>) => {
  const touchableStyle = useTouchableStyles<TStyleName>(styleNames ?? []);

  const pressableFunctionStyle =
    typeof style === 'function'
      ? (args: PressableStateCallbackType) => style(args)
      : undefined;

  return (
    <RNPressable
      {...props}
      style={[
        touchableStyle,
        pressableFunctionStyle !== undefined
          ? (pressableFunctionStyle as StyleProp<ViewStyle>)
          : ((style ?? {}) as StyleProp<ViewStyle>),
      ]}
    />
  );
};

export type TTouchableHighlightProps<TStyleName extends string> =
  TouchableHighlightProps & TStylesProps<TStyleName>;

export const TouchableHighlight = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TTouchableHighlightProps<TStyleName>) => {
  const touchableStyle = useTouchableStyles<TStyleName>(styleNames ?? []);
  return <RNTouchableHighlight {...props} style={style ? [touchableStyle, style] : touchableStyle} />;
};

export type TTouchableOpacityProps<TStyleName extends string> =
  TouchableOpacityProps & TStylesProps<TStyleName>;

export const TouchableOpacity = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TTouchableOpacityProps<TStyleName>) => {
  const touchableStyle = useTouchableStyles<TStyleName>(styleNames ?? []);
  return <RNTouchableOpacity {...props} style={style ? [touchableStyle, style] : touchableStyle} />;
};
