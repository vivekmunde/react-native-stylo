/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { TAvatarJacketStyle, TAvatarStyle, TVariable } from '../../types';
import {
  getAvatarJacketStyles as _getAvatarJacketStyles, getAvatarStyles as _getAvatarStyles
} from '../__generated__/assorted/avatar-styles';

export const getAvatarStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TAvatarStyle, ImageStyle>>({
    ..._getAvatarStyles(variables),
  })
);

export const getAvatarJacketStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TAvatarJacketStyle, ViewStyle>>({
    ..._getAvatarJacketStyles(variables),
  })
);
