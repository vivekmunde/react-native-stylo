/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import BackgroundColorStyles from '../generic/background-color-styles';
import BorderStyles from '../generic/border-styles';
import FlexStyles from '../generic/flex-styles';
import MarginStyles from '../generic/margin-styles';
import PaddingStyles from '../generic/padding-styles';

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
