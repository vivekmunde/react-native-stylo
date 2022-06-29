import { StyleSheet } from 'react-native';

import { AvatarJacketStyles } from '../assorted/avatar-styles';
import { BadgeStyles } from '../assorted/badge-styles';
import { ButtonStyles } from '../assorted/button-styles';
import FormStyles from '../assorted/form-styles';
import HorizontalStyles from '../assorted/horizontal-styles';
import ListStyles from '../assorted/list-styles';
import ScreenStyles from '../assorted/screen-styles';
import { TagStyles } from '../assorted/tag-styles';
import BackgroundColorStyles from '../generic/background-color-styles';
import BorderStyles from '../generic/border-styles';
import FlexStyles from '../generic/flex-styles';
import MarginStyles from '../generic/margin-styles';
import PaddingStyles from '../generic/padding-styles';

const TouchableStyles = StyleSheet.create({
  ...BackgroundColorStyles,
  ...BorderStyles,
  ...FlexStyles,
  ...MarginStyles,
  ...PaddingStyles,
  ...HorizontalStyles,
  ...AvatarJacketStyles,
  ...BadgeStyles,
  ...TagStyles,
  ...FormStyles,
  ...ListStyles,
  ...ScreenStyles,
  ...ButtonStyles,
});

export default TouchableStyles;