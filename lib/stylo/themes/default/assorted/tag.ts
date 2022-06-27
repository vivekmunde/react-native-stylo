import { StyleSheet } from 'react-native';

import Variables from '../variables';

export const TagStyles = StyleSheet.create({
  Tag: {
    paddingLeft: Variables.Padding,
    paddingRight: Variables.Padding,
    paddingTop: Math.round(Variables.Padding * 0.75),
    paddingBottom: Math.round(Variables.Padding * 0.75),
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Variables['Margin.XSmall'],
    marginBottom: Variables['Margin.XSmall'],
    borderRadius: 40,
  },
  'Tag.Small': {
    paddingLeft: Variables['Padding.Small'],
    paddingRight: Variables['Padding.Small'],
    paddingTop: Math.round(Variables['Padding.Small'] * 0.75),
    paddingBottom: Math.round(Variables['Padding.Small'] * 0.75),
  },
  'Tag.Large': {
    paddingLeft: Variables['Padding.Large'],
    paddingRight: Variables['Padding.Large'],
    paddingTop: Math.round(Variables['Padding.Large'] * 0.75),
    paddingBottom: Math.round(Variables['Padding.Large'] * 0.75),
  },
});

export const TagTextStyles = StyleSheet.create({
  'Tag.Text': {
    marginRight: Variables['Margin.XSmall'],
    marginBottom: Variables['Margin.XSmall'],
  },
});

export const TagIconStyles = StyleSheet.create({
  'Tag.Icon.Left': {
    marginRight: Variables['Margin.Small'],
  },
  'Tag.Icon.Right': {
    marginLeft: Variables['Margin.Small'],
  },
});

export const TagAvatarImageStyles = StyleSheet.create({
  'Tag.Avatar': {
    height: 24,
    width: 24,
    borderRadius: 24,
  },
  'Tag.Avatar.Left': {
    marginRight: Variables['Margin.Small'],
  },
  'Tag.Avatar.Right': {
    marginLeft: Variables['Margin.Small'],
  },
});
