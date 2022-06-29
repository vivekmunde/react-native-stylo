/* ------------------------- */
/*      Can be modified      */
/* ------------------------- */

import { StyleSheet } from 'react-native';

import { TextInputCStyles } from '../__generated__/components/text-input-styles';
import BackgroundColorStyles from '../generic/background-color-styles';
import FontColorStyles from '../generic/font-color-styles';

const TextInputStyles = StyleSheet.create({
  ...BackgroundColorStyles,
  ...FontColorStyles,
  ...TextInputCStyles,
});

export default TextInputStyles;
