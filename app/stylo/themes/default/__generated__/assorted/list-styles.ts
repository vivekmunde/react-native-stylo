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
import TListStyle from '../../../types/__generated__/assorted/list';

const getListStyles = (variables: Record<TVariable, string | number>) => {
  const padding = Number(variables.Padding);

  return StyleSheet.create<Record<TListStyle, ViewStyle>>({
    List: {},
    'List.Item': {
      paddingLeft: padding / 2,
      paddingRight: padding / 2,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'List.Item.Left': {
      paddingLeft: padding / 2,
      paddingRight: padding / 2,
      paddingTop: padding,
      paddingBottom: padding,
      display: 'flex',
      flexDirection: 'column',
    },
    'List.Item.Body': {
      paddingLeft: padding / 2,
      paddingRight: padding / 2,
      paddingTop: padding,
      paddingBottom: padding,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    'List.Item.Right': {
      paddingLeft: padding / 2,
      paddingRight: padding / 2,
      paddingTop: padding,
      paddingBottom: padding,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
  });
};

export default getListStyles;
