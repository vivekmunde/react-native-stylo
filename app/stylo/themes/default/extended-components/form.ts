import { StyleSheet } from 'react-native';
import Colors from '../colors';

const FormStyles = StyleSheet.create({
  Form: {},
  'Form.Item': {
    marginBottom: 16,
    borderRadius: 8,
  },
  'Form.LabelItem': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  'Form.LabelItem.Left': {},
  'Form.LabelItem.Body': {
    flex: 1,
  },
  'Form.LabelItem.Right': {},
  'Form.InputItem': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.Body,
    borderColor: Colors.Border,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },
  'Form.InputItem.Left': {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  'Form.InputItem.Body': {
    flex: 1,
    borderRadius: 8,
  },
  'Form.InputItem.Right': {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  'Form.HelpItem': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  'Form.HelpItem.Left': {},
  'Form.HelpItem.Body': {
    flex: 1,
  },
  'Form.HelpItem.Right': {},
});

export default FormStyles;
