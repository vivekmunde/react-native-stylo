/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TImageBackgroundStyle, TVariable } from '../../../types/__generated__';
import getBackgroundColorStyles from '../generic/background-color-styles';
import getBorderStyles from '../generic/border-styles';
import getFlexStyles from '../generic/flex-styles';
import getMarginStyles from '../generic/margin-styles';
import getPaddingStyles from '../generic/padding-styles';

const getImageBackgroundStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TImageBackgroundStyle, ViewStyle>>({
    ...getBackgroundColorStyles(variables),
    ...getBorderStyles(variables),
    ...getFlexStyles(),
    ...getMarginStyles(variables),
    ...getPaddingStyles(variables),
  })
);

export default getImageBackgroundStyles;
