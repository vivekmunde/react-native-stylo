import { StyleSheet } from 'react-native';
import BackgroundColorStyles from './background-color-styles';
import BorderStyles from './border-styles';
import FlexStyles from './flex-styles';
import MarginStyles from './margin-styles';
import PaddingStyles from './padding-styles';

export const ScrollViewStyles = StyleSheet.create({
  ...BackgroundColorStyles,
  ...BorderStyles,
  ...PaddingStyles,
  ...MarginStyles,
  ...FlexStyles,
});

export const ScrollViewContentContainerStyles = StyleSheet.create({
  ...BackgroundColorStyles,
  ...BorderStyles,
  ...PaddingStyles,
  ...MarginStyles,
  ...FlexStyles,
});
