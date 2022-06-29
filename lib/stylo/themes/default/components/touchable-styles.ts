/* ------------------------- */
/*      Can be modified      */
/* ------------------------- */

import { StyleSheet } from 'react-native';

import { ButtonStyles } from '../assorted/button-styles';
import ViewStyles from './view-styles';

const TouchableStyles = StyleSheet.create({
  ...ButtonStyles,
  ...ViewStyles,
});

export default TouchableStyles;
