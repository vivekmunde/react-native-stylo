/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TFlexStyle } from '../../types';
import _getFlexStyles from '../__generated__/generic/flex-styles';

const getFlexStyles = () => (
  StyleSheet.create<Record<TFlexStyle, ViewStyle>>({
    ..._getFlexStyles(),
  })
);

export default getFlexStyles;
