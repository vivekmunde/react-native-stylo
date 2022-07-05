/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import Variables from '../../variables';

export const AvatarStyles = StyleSheet.create({
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

export const AvatarJacketStyles = StyleSheet.create({
  'Avatar.Jacket': {
    height: Variables['Avatar.Size'],
    width: Variables['Avatar.Size'],
    borderRadius: Variables['Avatar.Size'],
  },
  'Avatar.Jacket.Border': {
    height: Variables['Avatar.Size'] + 2,
    width: Variables['Avatar.Size'] + 2,
    borderWidth: Variables['Border.Width'],
    borderColor: Variables['Border.Color'],
    borderStyle: 'solid',
  },
  'Avatar.Jacket.Small': {
    height: Variables['Avatar.Size.Small'],
    width: Variables['Avatar.Size.Small'],
    borderRadius: Variables['Avatar.Size.Small'],
  },
  'Avatar.Jacket.Small.Border': {
    height: Variables['Avatar.Size.Small'] + 2,
    width: Variables['Avatar.Size.Small'] + 2,
    borderWidth: Variables['Border.Width'],
    borderColor: Variables['Border.Color'],
    borderStyle: 'solid',
  },
  'Avatar.Jacket.Large': {
    height: Variables['Avatar.Size.Large'],
    width: Variables['Avatar.Size.Large'],
    borderRadius: Variables['Avatar.Size.Large'],
  },
  'Avatar.Jacket.Large.Border': {
    height: Variables['Avatar.Size.Large'] + 2,
    width: Variables['Avatar.Size.Large'] + 2,
    borderWidth: Variables['Border.Width'],
    borderColor: Variables['Border.Color'],
    borderStyle: 'solid',
  },
  'Avatar.Jacket.Square': {
    borderRadius: Variables['Border.Radius'],
  },
});
