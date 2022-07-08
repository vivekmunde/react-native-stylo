/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import Variables from '../../variables';

const ListStyles = StyleSheet.create({
  List: {},
  'List.Item': {
    paddingLeft: Variables.Padding / 2,
    paddingRight: Variables.Padding / 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'List.Item.Left': {
    paddingLeft: Variables.Padding / 2,
    paddingRight: Variables.Padding / 2,
    paddingTop: Variables.Padding,
    paddingBottom: Variables.Padding,
    display: 'flex',
    flexDirection: 'column',
  },
  'List.Item.Body': {
    paddingLeft: Variables.Padding / 2,
    paddingRight: Variables.Padding / 2,
    paddingTop: Variables.Padding,
    paddingBottom: Variables.Padding,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  'List.Item.Right': {
    paddingLeft: Variables.Padding / 2,
    paddingRight: Variables.Padding / 2,
    paddingTop: Variables.Padding,
    paddingBottom: Variables.Padding,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});

export default ListStyles;
