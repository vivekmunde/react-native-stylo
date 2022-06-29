import { StyleSheet } from 'react-native';

const HorizontalStyles = StyleSheet.create({
  Horizontal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  'Horizontal.Left': {},
  'Horizontal.Body': {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  'Horizontal.Right': {},
});

export default HorizontalStyles;
