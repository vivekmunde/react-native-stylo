/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle } from 'react-native';
import { TFontColorStyle, TVariable } from '../../types';
import _getFontColorStyles from '../__generated__/generic/font-color-styles';

const getFontColorStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TFontColorStyle, TextStyle>>({
    ..._getFontColorStyles(variables),
  })
);

export default getFontColorStyles;
