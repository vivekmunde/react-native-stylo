import { StyleSheet } from 'react-native';
import Colors from '../colors';

const FormStyles = StyleSheet.create({
  Form: {},
  'Form.Item': {
    marginBottom: 16,
    borderRadius: 8,
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
    backgroundColor: Colors['Color.Body'],
    borderColor: Colors['Color.Border'],
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },
  'Form.Item.Input.Left': {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  'Form.Item.Input.Body': {
    flex: 1,
    borderRadius: 8,
  },
  'Form.Item.Input.Right': {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
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
