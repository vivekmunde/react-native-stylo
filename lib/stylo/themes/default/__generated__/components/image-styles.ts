import { StyleSheet } from 'react-native';

import { AvatarStyles } from '../assorted/avatar-styles';
import { TagAvatarStyles } from '../assorted/tag-styles';
import BorderStyles from '../generic/border-styles';
import MarginStyles from '../generic/margin-styles';

const ImageStyles = StyleSheet.create({
  ...MarginStyles,
  ...BorderStyles,
  ...AvatarStyles,
  ...TagAvatarStyles,
});

export default ImageStyles;
