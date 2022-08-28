/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { THorizontalStyle } from '../../types';
import _getHorizontalStyles from '../__generated__/assorted/horizontal-styles';

const getHorizontalStyles = () => (
  StyleSheet.create<Record<THorizontalStyle, ViewStyle>>({
    ..._getHorizontalStyles(),
  })
);

export default getHorizontalStyles;
