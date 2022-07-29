/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { TVariable } from '../../../types/__generated__';
import { TAvatarJacketStyle, TAvatarStyle } from '../../../types/__generated__/assorted/avatar';

export const getAvatarStyles = (variables: Record<TVariable, string | number>) => {
  const borderRadius = Number(variables['Border.Radius']);
  const avatarSize = Number(variables['Avatar.Size']);
  const avatarSizeSmall = Number(variables['Avatar.Size.Small']);
  const avatarSizeLarge = Number(variables['Avatar.Size.Large']);

  return StyleSheet.create<Record<TAvatarStyle, ImageStyle>>({
    Avatar: {
      height: avatarSize,
      width: avatarSize,
      borderRadius: avatarSize,
    },
    'Avatar.Small': {
      height: avatarSizeSmall,
      width: avatarSizeSmall,
      borderRadius: avatarSizeSmall,
    },
    'Avatar.Large': {
      height: avatarSizeLarge,
      width: avatarSizeLarge,
      borderRadius: avatarSizeLarge,
    },
    'Avatar.Square': {
      borderRadius,
    },
  });
};

export const getAvatarJacketStyles = (variables: Record<TVariable, string | number>) => {
  const borderRadius = Number(variables['Border.Radius']);
  const avatarSize = Number(variables['Avatar.Size']);
  const avatarSizeSmall = Number(variables['Avatar.Size.Small']);
  const avatarSizeLarge = Number(variables['Avatar.Size.Large']);

  return StyleSheet.create<Record<TAvatarJacketStyle, ViewStyle>>({
    'Avatar.Jacket': {
      height: avatarSize,
      width: avatarSize,
      borderRadius: avatarSize,
    },
    'Avatar.Jacket.Small': {
      height: avatarSizeSmall,
      width: avatarSizeSmall,
      borderRadius: avatarSizeSmall,
    },
    'Avatar.Jacket.Large': {
      height: avatarSizeLarge,
      width: avatarSizeLarge,
      borderRadius: avatarSizeLarge,
    },
    'Avatar.Jacket.Square': {
      borderRadius,
    },
  });
};
