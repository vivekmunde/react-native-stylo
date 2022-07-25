/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import { TextInputCStyles } from '../__generated__/components/text-input-styles';
import BackgroundColorStyles from '../generic/background-color-styles';
import BorderStyles from '../generic/border-styles';
import FontColorStyles from '../generic/font-color-styles';
import MarginStyles from '../generic/margin-styles';
import PaddingStyles from '../generic/padding-styles';

const TextInputStyles = StyleSheet.create({
  ...BackgroundColorStyles,
  ...FontColorStyles,
  ...BorderStyles,
  ...MarginStyles,
  ...PaddingStyles,
  ...TextInputCStyles,
});

export default TextInputStyles;
