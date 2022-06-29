/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.3.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import Variables from '../../variables';

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
    borderRadius: Math.round((Variables.Padding + Variables['Font.Size']) * 2),
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
