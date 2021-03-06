/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import {
  AvatarCStyles,
  AvatarJacketStyles as _AvatarJacketStyles,
} from '../__generated__/assorted/avatar-styles';
import BorderStyles from '../generic/border-styles';

export const AvatarStyles = StyleSheet.create({
  ...BorderStyles,
  ...AvatarCStyles,
});

export const AvatarJacketStyles = _AvatarJacketStyles;
