import { StyleSheet } from 'react-native';

import Variables from '../variables';

export const AvatarImageStyles = StyleSheet.create({
  Avatar: {
    height: 38,
    width: 38,
    borderRadius: 38,
  },
  'Avatar.Large': {
    height: 54,
    width: 54,
    borderRadius: 54,
  },
  'Avatar.Small': {
    height: 22,
    width: 22,
    borderRadius: 22,
  },
  'Avatar.Square': {
    borderRadius: Variables['Border.Radius'],
  },
});
