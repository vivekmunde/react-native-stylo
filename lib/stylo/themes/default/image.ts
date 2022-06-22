import { StyleSheet } from 'react-native';
import BorderStyles from './border-styles';
import { AvatarImageStyles } from './extended-components/avatar';
import { TagAvatarImageStyles } from './extended-components/tag';

const ImageStyles = StyleSheet.create({
  ...BorderStyles,
  ...AvatarImageStyles,
  ...TagAvatarImageStyles,
});

export default ImageStyles;
