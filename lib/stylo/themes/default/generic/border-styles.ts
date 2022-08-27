/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { TBorderStyle, TVariable } from '../../types';
import _getBorderStyles from '../__generated__/generic/border-styles';

const getBorderStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TBorderStyle, ViewStyle | ImageStyle>>({
    ..._getBorderStyles(variables),
  })
);

export default getBorderStyles;
