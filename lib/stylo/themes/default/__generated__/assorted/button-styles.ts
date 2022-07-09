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

export const ButtonStyles = StyleSheet.create({
  Button: {
    padding: Variables.Padding,
    borderRadius: Variables['Border.Radius'],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'Button.Small': {
    padding: Variables['Padding.Small'],
  },
  'Button.Large': {
    padding: Variables['Padding.Large'],
  },
  'Button.Round': {
    borderRadius: Variables.Padding + Variables['Avatar.Size'],
    padding: Variables.Padding,
    paddingLeft: Variables.Padding * 1.5,
    paddingRight: Variables.Padding * 1.5,
  },
  'Button.Circle': {
    borderRadius: Variables.Padding + Variables['Avatar.Size'],
  },
  'Button.Transparent': {
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
});

export const ButtonTextStyles = StyleSheet.create({
  'Button.Text': {
    fontSize: Variables['Font.Size'] + 2,
    lineHeight: Variables['Font.Size'] + 2 + 8,
    fontWeight: '500',
    marginLeft: 4,
    marginRight: 4,
  },
});

export const ButtonIconStyles = StyleSheet.create({
  'Button.Icon': {},
  'Button.Icon.Left': {
    marginRight: 4,
  },
  'Button.Icon.Right': {
    marginLeft: 4,
  },
  'Button.Circle.Icon': {
    fontSize: Variables['Font.Size'],
    lineHeight: Variables['Font.Size'],
    marginLeft: 0,
    marginRight: 0,
  },
  'Button.Circle.Icon.Small': {
    fontSize: Variables['Font.Size.Small'],
    lineHeight: Variables['Font.Size.Small'],
    marginLeft: 0,
    marginRight: 0,
  },
  'Button.Circle.Icon.Large': {
    fontSize: Variables['Font.Size.Large'],
    lineHeight: Variables['Font.Size.Large'],
    marginLeft: 0,
    marginRight: 0,
  },
});
