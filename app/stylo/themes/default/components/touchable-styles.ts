/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import { AvatarJacketStyles } from '../assorted/avatar-styles';
import { BadgeStyles } from '../assorted/badge-styles';
import { ButtonStyles } from '../assorted/button-styles';
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
  ...ListStyles,
  ...ScreenStyles,
  ...ButtonStyles,
});

export default TouchableStyles;
