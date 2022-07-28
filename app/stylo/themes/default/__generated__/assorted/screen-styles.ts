/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TVariable } from '../../../types/__generated__';
import TScreenStyle from '../../../types/__generated__/assorted/screen';

const getScreenStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TScreenStyle, ViewStyle>>({
    Screen: {
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      backgroundColor: variables['Screen.BackgroundColor'].toString(),
    },
    'Screen.Header': {
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    'Screen.Header.Left': {
      minWidth: 48,
      display: 'flex',
      flexDirection: 'row',
    },
    'Screen.Header.Body': {
      flex: 1,
    },
    'Screen.Header.Right': {
      minWidth: 48,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    'Screen.Body': {
      padding: 0,
      margin: 0,
      flex: 1,
      flexDirection: 'column',
    },
    'Screen.Footer': {
      padding: 0,
      margin: 0,
    },
  })
);

export default getScreenStyles;
