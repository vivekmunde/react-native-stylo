/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

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
