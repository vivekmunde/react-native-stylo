import React from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type TStyles = {
  IconStyles: Record<string, TextStyle>;
  ImageBackgroundStyles: Record<string, ViewStyle>;
  ImageStyles: Record<string, ImageStyle>,
  SafeAreaViewStyles: Record<string, ViewStyle>,
  ScrollViewStyles: Record<string, ViewStyle>,
  ScrollViewContentContainerStyles: Record<string, ViewStyle>,
  TextInputStyles: Record<string, TextStyle>,
  TextStyles: Record<string, TextStyle>,
  TouchableStyles: Record<string, ViewStyle>,
  ViewStyles: Record<string, ViewStyle>,
};

export type TContext = {
  variables: Record<string, string|number>;
  styles: TStyles;
};

export default React.createContext<TContext>({
  variables: {},
  styles: {
    IconStyles: {},
    ImageBackgroundStyles: {},
    ImageStyles: {},
    SafeAreaViewStyles: {},
    ScrollViewStyles: {},
    ScrollViewContentContainerStyles: {},
    TextInputStyles: {},
    TextStyles: {},
    TouchableStyles: {},
    ViewStyles: {},
  },
});
