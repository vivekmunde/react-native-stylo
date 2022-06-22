import { StyleSheet } from 'react-native';

import { borderRadius } from '../variables';

export const AvatarViewStyles = StyleSheet.create({
  Avatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  'Avatar.Large': {
    height: 56,
    width: 56,
    borderRadius: 56,
  },
  'Avatar.Small': {
    height: 24,
    width: 24,
    borderRadius: 24,
  },
  'Avatar.Square': {
    borderRadius,
  },
});

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
    borderRadius,
  },
});
