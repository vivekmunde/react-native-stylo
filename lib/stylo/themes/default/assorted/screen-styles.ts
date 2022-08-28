/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TScreenStyle, TVariable } from '../../types';
import _getScreenStyles from '../__generated__/assorted/screen-styles';

const getScreenStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TScreenStyle, ViewStyle>>({
    ..._getScreenStyles(variables),
  })
);

export default getScreenStyles;
