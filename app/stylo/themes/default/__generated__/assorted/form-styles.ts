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
import TFormStyle from '../../../types/__generated__/assorted/form';

const getFormStyles = (variables: Record<TVariable, string | number>) => {
  const borderRadius = Number(variables['Border.Radius']);
  const borderColor = variables['Border.Color'].toString();
  const borderWidth = Number(variables['Border.Width']);

  return StyleSheet.create<Record<TFormStyle, ViewStyle>>({
    Form: {},
    'Form.Item': {
      marginBottom: variables.Margin,
      borderRadius,
    },
    'Form.Item.Label': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    'Form.Item.Label.Left': {
      paddingRight: variables['Padding.Small'],
    },
    'Form.Item.Label.Body': {
      flex: 1,
    },
    'Form.Item.Label.Right': {
      paddingLeft: variables['Padding.Small'],
    },
    'Form.Item.Input': {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'rgba(255,255,255,1)',
      borderColor,
      borderWidth,
      borderStyle: 'solid',
      borderRadius,
    },
    'Form.Item.Input.Left': {
      borderTopLeftRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      paddingLeft: variables.Padding,
      paddingRight: variables.Padding,
      flexDirection: 'row',
      alignItems: 'center',
    },
    'Form.Item.Input.Body': {
      flex: 1,
      borderRadius,
      flexDirection: 'row',
      alignItems: 'center',
    },
    'Form.Item.Input.Right': {
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      paddingLeft: variables.Padding,
      paddingRight: variables.Padding,
      flexDirection: 'row',
      alignItems: 'center',
    },
    'Form.Item.Help': {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 4,
    },
    'Form.Item.Help.Left': {
      paddingRight: variables['Padding.Small'],
    },
    'Form.Item.Help.Body': {
      flex: 1,
    },
    'Form.Item.Help.Right': {
      paddingLeft: variables['Padding.Small'],
    },
  });
};

export default getFormStyles;
