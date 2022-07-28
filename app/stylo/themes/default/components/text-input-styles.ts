/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle } from 'react-native';
import { TTextInputStyle, TVariable } from '../../types';
import getBackgroundColorStyles from '../generic/background-color-styles';
import getBorderStyles from '../generic/border-styles';
import getFontColorStyles from '../generic/font-color-styles';
import getMarginStyles from '../generic/margin-styles';
import getPaddingStyles from '../generic/padding-styles';
import { getTextInputCStyles } from '../__generated__/components/text-input-styles';

const getTextInputStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TTextInputStyle, TextStyle>>({
    ...getBackgroundColorStyles(variables),
    ...getFontColorStyles(variables),
    ...getBorderStyles(variables),
    ...getMarginStyles(variables),
    ...getPaddingStyles(variables),
    ...getTextInputCStyles(variables),
  })
);

export default getTextInputStyles;
