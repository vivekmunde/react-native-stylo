/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import Variables from '../../variables';

const FormStyles = StyleSheet.create({
  Form: {},
  'Form.Item': {
    marginBottom: Variables.Margin,
    borderRadius: Variables['Border.Radius'],
  },
  'Form.Item.Label': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  'Form.Item.Label.Left': {
    paddingRight: Variables['Padding.Small'],
  },
  'Form.Item.Label.Body': {
    flex: 1,
  },
  'Form.Item.Label.Right': {
    paddingLeft: Variables['Padding.Small'],
  },
  'Form.Item.Input': {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Variables['Body.Color'],
    borderColor: Variables['Border.Color'],
    borderWidth: Variables['Border.Width'],
    borderStyle: 'solid',
    borderRadius: Variables['Border.Radius'],
  },
  'Form.Item.Input.Left': {
    borderTopLeftRadius: Variables['Border.Radius'],
    borderBottomLeftRadius: Variables['Border.Radius'],
    paddingLeft: Variables.Padding,
    paddingRight: Variables.Padding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  'Form.Item.Input.Body': {
    flex: 1,
    borderRadius: Variables['Border.Radius'],
    flexDirection: 'row',
    alignItems: 'center',
  },
  'Form.Item.Input.Right': {
    borderTopRightRadius: Variables['Border.Radius'],
    borderBottomRightRadius: Variables['Border.Radius'],
    paddingLeft: Variables.Padding,
    paddingRight: Variables.Padding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  'Form.Item.Help': {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4,
  },
  'Form.Item.Help.Left': {
    paddingRight: Variables['Padding.Small'],
  },
  'Form.Item.Help.Body': {
    flex: 1,
  },
  'Form.Item.Help.Right': {
    paddingLeft: Variables['Padding.Small'],
  },
});

export default FormStyles;
