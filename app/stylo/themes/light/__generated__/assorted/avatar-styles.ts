/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import Variables from '../../variables';
import BorderStyles from '../generic/border-styles';

export const AvatarCStyles = StyleSheet.create({
  Avatar: {
    height: Variables['Avatar.Size'],
    width: Variables['Avatar.Size'],
    borderRadius: Variables['Avatar.Size'],
  },
  'Avatar.Small': {
    height: Variables['Avatar.Size.Small'],
    width: Variables['Avatar.Size.Small'],
    borderRadius: Variables['Avatar.Size.Small'],
  },
  'Avatar.Large': {
    height: Variables['Avatar.Size.Large'],
    width: Variables['Avatar.Size.Large'],
    borderRadius: Variables['Avatar.Size.Large'],
  },
  'Avatar.Square': {
    borderRadius: Variables['Border.Radius'],
  },
});

export const AvatarStyles = StyleSheet.create({
  ...BorderStyles,
  ...AvatarCStyles,
});

export const AvatarJacketStyles = StyleSheet.create({
  'Avatar.Jacket': {
    height: Variables['Avatar.Size'],
    width: Variables['Avatar.Size'],
    borderRadius: Variables['Avatar.Size'],
  },
  'Avatar.Jacket.Small': {
    height: Variables['Avatar.Size.Small'],
    width: Variables['Avatar.Size.Small'],
    borderRadius: Variables['Avatar.Size.Small'],
  },
  'Avatar.Jacket.Large': {
    height: Variables['Avatar.Size.Large'],
    width: Variables['Avatar.Size.Large'],
    borderRadius: Variables['Avatar.Size.Large'],
  },
  'Avatar.Jacket.Square': {
    borderRadius: Variables['Border.Radius'],
  },
});
