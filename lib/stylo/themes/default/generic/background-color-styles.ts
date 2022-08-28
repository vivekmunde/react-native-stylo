/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TBackgroundColorStyle, TVariable } from '../../types';
import _getBackgroundColorStyles from '../__generated__/generic/background-color-styles';

const getBackgroundColorStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TBackgroundColorStyle, ViewStyle>>({
    ..._getBackgroundColorStyles(variables),
  })
);

export default getBackgroundColorStyles;
