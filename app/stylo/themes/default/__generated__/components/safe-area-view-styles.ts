/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TSafeAreaViewStyle, TVariable } from '../../../types/__generated__';
import getBackgroundColorStyles from '../generic/background-color-styles';

const getSafeAreaViewStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TSafeAreaViewStyle, ViewStyle>>({
    ...getBackgroundColorStyles(variables)
  })
);

export default getSafeAreaViewStyles;
