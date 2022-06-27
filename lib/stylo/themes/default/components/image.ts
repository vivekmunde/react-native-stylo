import { StyleSheet } from 'react-native';
import BorderStyles from '../generic/border-styles';
import { AvatarImageStyles } from '../assorted/avatar';
import { TagAvatarImageStyles } from '../assorted/tag';

const ImageStyles = StyleSheet.create({
  ...BorderStyles,
  ...AvatarImageStyles,
  ...TagAvatarImageStyles,
});

export default ImageStyles;
