import { StyleSheet } from 'react-native';

import BackgroundColorStyles from '../generic/background-color-styles';
import BorderStyles from '../generic/border-styles';
import { BadgeStyles } from '../assorted/badge';
import FormStyles from '../assorted/form';
import HorizontalStyles from '../assorted/horizontal';
import ListStyles from '../assorted/list';
import ScreenStyles from '../assorted/screen';
import { TagStyles } from '../assorted/tag';
import FlexStyles from '../generic/flex-styles';
import MarginStyles from '../generic/margin-styles';
import PaddingStyles from '../generic/padding-styles';

const ViewCommonBorderStyles = BorderStyles;

const ViewCommonFlexStyles = FlexStyles;

const ViewCommonMarginStyles = MarginStyles;

const ViewCommonPaddingStyles = PaddingStyles;

export const ViewCommonStyles = StyleSheet.create({
  ...BackgroundColorStyles,
  ...ViewCommonBorderStyles,
  ...ViewCommonFlexStyles,
  ...ViewCommonMarginStyles,
  ...ViewCommonPaddingStyles,
});

const ViewStyles = StyleSheet.create({
  ...ViewCommonStyles,
  ...HorizontalStyles,
  ...BadgeStyles,
  ...TagStyles,
  ...FormStyles,
  ...ListStyles,
  ...ScreenStyles,
  Default: {
    padding: 0,
    margin: 0,
  },
});

export default ViewStyles;
