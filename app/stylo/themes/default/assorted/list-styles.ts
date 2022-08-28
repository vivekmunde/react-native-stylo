/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TListStyle, TVariable } from '../../types';
import _getListStyles from '../__generated__/assorted/list-styles';

const getListStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TListStyle, ViewStyle>>({
    ..._getListStyles(variables),
  })
);

export default getListStyles;
