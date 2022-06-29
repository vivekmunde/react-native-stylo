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
  'Button.Icon': {
    marginLeft: 4,
    marginRight: 4,
  },
  'Button.Icon.Left': {
    marginRight: 4,
  },
  'Button.Icon.Right': {
    marginLeft: 4,
  },
  'Button.Circle.Icon': {
    lineHeight: Variables['Font.Size'],
  },
  'Button.Circle.Icon.Small': {
    lineHeight: Variables['Font.Size.Small'],
  },
  'Button.Circle.Icon.Large': {
    lineHeight: Variables['Font.Size.Large'],
  },
});
