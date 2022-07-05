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

export const TagStyles = StyleSheet.create({
  Tag: {
    paddingLeft: Variables['Padding.Small'],
    paddingRight: Variables['Padding.Small'],
    paddingTop: Variables['Padding.Small'],
    paddingBottom: Variables['Padding.Small'],
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Variables['Margin.Mini'],
    marginBottom: Variables['Margin.Mini'],
    borderRadius: Math.round((Variables.Padding + Variables['Font.Size']) * 2),
  },
  'Tag.Small': {
    paddingLeft: Variables['Padding.Mini'],
    paddingRight: Variables['Padding.Mini'],
    paddingTop: Variables['Padding.Mini'],
    paddingBottom: Variables['Padding.Mini'],
  },
  'Tag.Large': {
    paddingLeft: Variables.Padding,
    paddingRight: Variables.Padding,
    paddingTop: Variables.Padding,
    paddingBottom: Variables.Padding,
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
  'Tag.Icon.Left': {
    marginRight: Variables['Margin.Small'],
  },
  'Tag.Icon.Right': {
    marginLeft: Variables['Margin.Small'],
  },
});

export const TagAvatarStyles = StyleSheet.create({
  'Tag.Avatar': {
    height: Variables['Avatar.Size.Small'],
    width: Variables['Avatar.Size.Small'],
    borderRadius: Variables['Avatar.Size.Small'],
  },
  'Tag.Avatar.Left': {
    marginRight: Variables['Margin.Small'],
  },
  'Tag.Avatar.Right': {
    marginLeft: Variables['Margin.Small'],
  },
});
