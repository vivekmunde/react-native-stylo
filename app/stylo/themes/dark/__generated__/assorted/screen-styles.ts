/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';
import Variables from '../variables';

const ScreenStyles = StyleSheet.create({
  Screen: {
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: Variables['Screen.BackgroundColor'],
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
});

export default ScreenStyles;
