import colors from './colors';
import IconStyles from './icon';
import ImageStyles from './image';
import ImageBackgroundStyles from './image-background';
import KeyboardAvoidingViewStyles from './keyboard-avoiding-view';
import SafeAreaViewStyles from './safe-area-view';
import {
  ScrollViewStyles,
  ScrollViewContentContainerStyles,
} from './scroll-view';
import TextInputStyles from './text-input';
import TextStyles from './text';
import TouchableStyles from './touchable';
import {
  borderRadius,
  borderRadiusLarge,
  borderRadiusSmall,
  borderWidth,
  margin,
  marginLarge,
  marginSmall,
  marginXSmall,
  padding,
  paddingLarge,
  paddingSmall,
  paddingXSmall,
} from './variables';
import ViewStyles from './view';

export const variables = {
  ...colors,
  'Border.Width': borderWidth,
  'Border.Radius': borderRadius,
  'Border.Radius.Small': borderRadiusSmall,
  'Border.Radius.Large': borderRadiusLarge,
  Margin: margin,
  'Margin.XSmall': marginXSmall,
  'Margin.Small': marginSmall,
  'Margin.Large': marginLarge,
  Padding: padding,
  'Padding.XSmall': paddingXSmall,
  'Padding.Small': paddingSmall,
  'Padding.Large': paddingLarge,
};

export const styles = {
  IconStyles,
  ImageBackgroundStyles,
  ImageStyles,
  KeyboardAvoidingViewStyles,
  SafeAreaViewStyles,
  ScrollViewStyles,
  ScrollViewContentContainerStyles,
  TextInputStyles,
  TextStyles,
  TouchableStyles,
  ViewStyles,
};
