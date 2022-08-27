/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { THorizontalStyle } from '../../../types/__generated__';

const getHorizontalStyles = () => (
  StyleSheet.create<Record<THorizontalStyle, ViewStyle>>({
    Horizontal: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    'Horizontal.Left': {},
    'Horizontal.Body': {
      flex: 1,
    },
    'Horizontal.Right': {},
  })
);

export default getHorizontalStyles;
