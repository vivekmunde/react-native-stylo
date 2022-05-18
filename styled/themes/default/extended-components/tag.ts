import { StyleSheet } from 'react-native';

import {
  marginSmall,
  marginXSmall,
  padding,
  paddingLarge,
  paddingSmall,
} from '../variables';

export const TagStyles = StyleSheet.create({
  Tag: {
    paddingLeft: padding,
    paddingRight: padding,
    paddingTop: Math.round(padding * 0.75),
    paddingBottom: Math.round(padding * 0.75),
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: marginXSmall,
    marginBottom: marginXSmall,
    borderRadius: 40,
  },
  'Tag.Small': {
    paddingLeft: paddingSmall,
    paddingRight: paddingSmall,
    paddingTop: Math.round(paddingSmall * 0.75),
    paddingBottom: Math.round(paddingSmall * 0.75),
  },
  'Tag,Large': {
    paddingLeft: paddingLarge,
    paddingRight: paddingLarge,
    paddingTop: Math.round(paddingLarge * 0.75),
    paddingBottom: Math.round(paddingLarge * 0.75),
  },
});

export const TagTextStyles = StyleSheet.create({
  'Tag.Text': {
    marginRight: marginXSmall,
    marginBottom: marginXSmall,
  },
});

export const TagIconStyles = StyleSheet.create({
  'Tag.Icon.Left': {
    marginRight: marginSmall,
  },
  'Tag.Icon.Right': {
    marginLeft: marginSmall,
  },
});

export const TagAvatarViewStyles = StyleSheet.create({
  'Tag.Avatar': {
    height: 24,
    width: 24,
    borderRadius: 24,
  },
  'Tag.Avatar.Left': {
    marginRight: marginSmall,
  },
  'Tag.Avatar.Right': {
    marginLeft: marginSmall,
  },
});

export const TagAvatarImageStyles = StyleSheet.create({
  'Tag.Avatar': {
    height: 24,
    width: 24,
    borderRadius: 24,
  },
  'Tag.Avatar.Left': {
    marginRight: marginSmall,
  },
  'Tag.Avatar.Right': {
    marginLeft: marginSmall,
  },
});
