/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import { IconCStyles } from '../__generated__/components/icon-styles';
import { ButtonIconStyles } from '../assorted/button-styles';
import { TagIconStyles } from '../assorted/tag-styles';
import FontColorStyles from '../generic/font-color-styles';
import MarginStyles from '../generic/margin-styles';

const IconStyles = StyleSheet.create({
  ...FontColorStyles,
  ...MarginStyles,
  ...ButtonIconStyles,
  ...TagIconStyles,
  ...IconCStyles,
});

export default IconStyles;
