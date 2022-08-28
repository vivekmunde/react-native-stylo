/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TPaddingStyle, TVariable } from '../../types';
import _getPaddingStyles from '../__generated__/generic/padding-styles';

const getPaddingStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TPaddingStyle, ViewStyle | TextStyle>>({
    ..._getPaddingStyles(variables),
  })
);

export default getPaddingStyles;
