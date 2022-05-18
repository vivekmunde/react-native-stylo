import React from 'react';
import {
  Pressable as RNPressable,
  PressableProps,
  TouchableHighlight as RNTouchableHighlight,
  TouchableHighlightProps,
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  PressableStateCallbackType,
  ViewStyle,
} from 'react-native';
import { TStylesProps, useTouchableStyles } from '../stylers';

export type TPressableProps<T extends string> = PressableProps &
  TStylesProps<T>;

export const Pressable = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TPressableProps<T>) => {
  const viewStyle = useTouchableStyles<T>(
    styleNames,
    styleNamespace ?? 'TouchableStyles',
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

export type TTouchableHighlightProps<T extends string> =
  TouchableHighlightProps & TStylesProps<T>;

export const TouchableHighlight = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTouchableHighlightProps<T>) => {
  const viewStyle = useTouchableStyles<T>(
    styleNames,
    styleNamespace ?? 'TouchableStyles',
  );
  return <RNTouchableHighlight {...props} style={[viewStyle, style]} />;
};

export type TTouchableOpacityProps<T extends string> = TouchableOpacityProps &
  TStylesProps<T>;

export const TouchableOpacity = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTouchableOpacityProps<T>) => {
  const viewStyle = useTouchableStyles<T>(
    styleNames,
    styleNamespace ?? 'TouchableStyles',
  );
  return <RNTouchableOpacity {...props} style={[viewStyle, style]} />;
};
