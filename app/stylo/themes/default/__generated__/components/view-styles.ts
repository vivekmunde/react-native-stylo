/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import { AvatarJacketStyles } from '../assorted/avatar-styles';
import { BadgeStyles } from '../assorted/badge-styles';
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

const ViewStyles = StyleSheet.create({
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
  Default: {
    padding: 0,
    margin: 0,
  },
});

export default ViewStyles;
