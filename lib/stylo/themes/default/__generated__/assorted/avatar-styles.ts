import { StyleSheet } from 'react-native';

import Variables from '../../variables';

const AvatarStyles = StyleSheet.create({
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

export default AvatarStyles;
