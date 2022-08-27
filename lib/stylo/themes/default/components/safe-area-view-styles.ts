/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TSafeAreaViewStyle, TVariable } from '../../types';
import _getBackgroundColorStyles from '../generic/background-color-styles';

const getSafeAreaViewStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TSafeAreaViewStyle, ViewStyle>>({
    ..._getBackgroundColorStyles(variables),
  })
);

export default getSafeAreaViewStyles;
