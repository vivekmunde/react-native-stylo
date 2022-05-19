import { StyleSheet } from 'react-native';
import { ButtonStyles } from './extended-components/button';
import ViewStyles from './view';

const TouchableStyles = StyleSheet.create({
  ...ButtonStyles,
  ...ViewStyles,
});

export default TouchableStyles;
