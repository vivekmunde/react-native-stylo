/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TMarginStyle, TVariable } from '../../types';
import _getMarginStyles from '../__generated__/generic/margin-styles';

const getMarginStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TMarginStyle, ViewStyle | TextStyle | ImageStyle>>({
    ..._getMarginStyles(variables),
  })
);

export default getMarginStyles;
