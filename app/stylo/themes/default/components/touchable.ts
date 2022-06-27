import { StyleSheet } from 'react-native';
import { ButtonStyles } from '../assorted/button';
import ViewStyles from './view';

const TouchableStyles = StyleSheet.create({
  ...ButtonStyles,
  ...ViewStyles,
});

export default TouchableStyles;
