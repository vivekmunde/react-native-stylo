/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TFormStyle, TVariable } from '../../types';
import _getFormStyles from '../__generated__/assorted/form-styles';

const getFormStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TFormStyle, ViewStyle>>({
    ..._getFormStyles(variables),
  })
);

export default getFormStyles;
