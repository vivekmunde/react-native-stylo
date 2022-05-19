import { StyleSheet } from 'react-native';

import BackgroundColorStyles from './background-color-styles';
import BorderStyles from './border-styles';
import { AvatarViewStyles } from './extended-components/avatar';
import { BadgeStyles } from './extended-components/badge';
import FormStyles from './extended-components/form';
import HorizontalStyles from './extended-components/horizontal';
import ListStyles from './extended-components/list';
import ScreenStyles from './extended-components/screen';
import { TagAvatarViewStyles, TagStyles } from './extended-components/tag';
import FlexStyles from './flex-styles';
import MarginStyles from './margin-styles';
import PaddingStyles from './padding-styles';

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
  ...AvatarViewStyles,
  ...BadgeStyles,
  ...TagStyles,
  ...TagAvatarViewStyles,
  ...FormStyles,
  ...ListStyles,
  ...ScreenStyles,
  Default: {
    padding: 0,
    margin: 0,
  },
});

export default ViewStyles;
