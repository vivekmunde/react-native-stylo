/* ------------------------- */
/*      Can be modified      */
/* ------------------------- */

import { StyleSheet } from 'react-native';

import AvatarStyles from '../assorted/avatar-styles';
import { TagAvatarStyles } from '../assorted/tag-styles';
import BorderStyles from '../generic/border-styles';

const ImageStyles = StyleSheet.create({
  ...BorderStyles,
  ...AvatarStyles,
  ...TagAvatarStyles,
});

export default ImageStyles;
