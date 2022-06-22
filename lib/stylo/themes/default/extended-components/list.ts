import { StyleSheet } from 'react-native';
import Colors from '../colors';
import { padding } from '../variables';

const ListStyles = StyleSheet.create({
  List: {},
  'List.Item': {
    paddingLeft: padding / 2,
    paddingRight: padding / 2,
    display: 'flex',
    flexDirection: 'row',
  },
  'List.Item.Separator': {
    paddingLeft: padding / 2,
    paddingRight: padding / 2,
    backgroundColor: Colors.Grey2,
    minHeight: 24,
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

export default ListStyles;
