import { StyleSheet } from 'react-native';
import BackgroundColorStyles from '../generic/background-color-styles';
import Colors from '../colors';
import FontColorStyles from '../generic/font-color-styles';

const TextInputStyles = StyleSheet.create({
  ...BackgroundColorStyles,
  ...FontColorStyles,
  Default: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    color: Colors['Color.Font'],
    fontSize: 16,
    fontWeight: '400',
    minHeight: 40,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%',
  },
  'Align.Center': {
    textAlign: 'center',
  },
  'Align.Right': {
    textAlign: 'right',
  },
  Bold: {
    fontWeight: '600',
  },
  Small: {
    fontSize: 12,
    minHeight: 32,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  Large: {
    fontSize: 24,
    minHeight: 48,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default TextInputStyles;
