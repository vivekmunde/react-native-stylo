/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

const HorizontalStyles = StyleSheet.create({
  Horizontal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  'Horizontal.Left': {},
  'Horizontal.Body': {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  'Horizontal.Right': {},
});

export default HorizontalStyles;
