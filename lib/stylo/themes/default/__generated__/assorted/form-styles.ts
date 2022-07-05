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
  'Form.Item.Label.Left': {},
  'Form.Item.Label.Body': {
    flex: 1,
  },
  'Form.Item.Label.Right': {},
  'Form.Item.Input': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Variables['Body.Color'],
    borderColor: Variables['Border.Color'],
    borderWidth: Variables['Border.Width'],
    borderStyle: 'solid',
    borderRadius: Variables['Border.Radius'],
  },
  'Form.Item.Input.Left': {
    borderTopLeftRadius: Variables['Border.Radius'],
    borderBottomLeftRadius: Variables['Border.Radius'],
  },
  'Form.Item.Input.Body': {
    flex: 1,
    borderRadius: Variables['Border.Radius'],
  },
  'Form.Item.Input.Right': {
    borderTopRightRadius: Variables['Border.Radius'],
    borderBottomRightRadius: Variables['Border.Radius'],
  },
  'Form.Item.Help': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  'Form.Item.Help.Left': {},
  'Form.Item.Help.Body': {
    flex: 1,
  },
  'Form.Item.Help.Right': {},
});

export default FormStyles;
