/* ------------------------- */
/*      Can be modified      */
/* ------------------------- */

import { StyleSheet } from 'react-native';

import { IconCStyles } from '../__generated__/components/icon-styles';
import { ButtonIconStyles } from '../assorted/button-styles';
import { TagIconStyles } from '../assorted/tag-styles';
import FontColorStyles from '../generic/font-color-styles';

const IconStyles = StyleSheet.create({
  ...FontColorStyles,
  ...ButtonIconStyles,
  ...TagIconStyles,
  ...IconCStyles,
});

export default IconStyles;
