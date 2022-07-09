/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import Variables from '../../variables';

export const TagStyles = StyleSheet.create({
  Tag: {
    padding: Variables['Padding.Small'] - 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Variables['Margin.Mini'],
    marginBottom: Variables['Margin.Mini'],
    borderRadius: Math.round(
      (Variables['Padding.Small'] + Variables['Font.Size']) * 2,
    ),
  },
  'Tag.Small': {
    padding: Math.max(Variables['Padding.Mini'] - 2, 4),
  },
  'Tag.Large': {
    padding: Variables.Padding - 4,
  },
});

export const TagTextStyles = StyleSheet.create({
  'Tag.Text': {
    marginLeft: Variables['Margin.Small'],
    marginRight: Variables['Margin.Small'],
  },
  'Tag.Text.Left': {
    marginRight: Variables['Margin.Small'],
  },
  'Tag.Text.Right': {
    marginLeft: Variables['Margin.Small'],
  },
});

export const TagIconStyles = StyleSheet.create({
  'Tag.Icon': {
    marginLeft: 4,
    marginRight: 4,
  },
  'Tag.Icon.Left': {
    marginLeft: 4,
    marginRight: 0,
  },
  'Tag.Icon.Right': {
    marginLeft: 0,
    marginRight: 4,
  },
});

export const TagAvatarStyles = StyleSheet.create({
  'Tag.Avatar': {
    height: Variables['Font.Size'] + 8,
    width: Variables['Font.Size'] + 8,
    borderRadius: Variables['Font.Size'] + 8,
    marginLeft: 2,
    marginRight: 2,
  },
  'Tag.Avatar.Small': {
    height: Variables['Font.Size.Small'] + 8,
    width: Variables['Font.Size.Small'] + 8,
    borderRadius: Variables['Font.Size.Small'] + 8,
    marginLeft: 2,
    marginRight: 2,
  },
  'Tag.Avatar.Large': {
    height: Variables['Font.Size.Large'] + 8,
    width: Variables['Font.Size.Large'] + 8,
    borderRadius: Variables['Font.Size.Large'] + 8,
    marginLeft: 2,
    marginRight: 2,
  },
  'Tag.Avatar.Left': {
    marginLeft: 2,
    marginRight: 0,
  },
  'Tag.Avatar.Right': {
    marginLeft: 0,
    marginRight: 2,
  },
});
