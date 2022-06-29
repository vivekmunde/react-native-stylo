/* ------------------------- */
/*      Can be modified      */
/* ------------------------- */

import { StyleSheet } from 'react-native';

import BackgroundColorStyles from '../generic/background-color-styles';
import BorderStyles from '../generic/border-styles';
import FlexStyles from '../generic/flex-styles';
import MarginStyles from '../generic/margin-styles';
import PaddingStyles from '../generic/padding-styles';

const ImageBackgroundStyles = StyleSheet.create({
  ...BackgroundColorStyles,
  ...BorderStyles,
  ...FlexStyles,
  ...MarginStyles,
  ...PaddingStyles,
});

export default ImageBackgroundStyles;
