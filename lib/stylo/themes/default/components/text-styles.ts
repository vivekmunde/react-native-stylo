/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import { TextCStyles } from '../__generated__/components/text-styles';
import { BadgeTextStyles } from '../assorted/badge-styles';
import { ButtonTextStyles } from '../assorted/button-styles';
import { TagTextStyles } from '../assorted/tag-styles';
import FontColorStyles from '../generic/font-color-styles';

const TextStyles = StyleSheet.create({
  ...FontColorStyles,
  ...BadgeTextStyles,
  ...ButtonTextStyles,
  ...TagTextStyles,
  ...TextCStyles,
});

export default TextStyles;
