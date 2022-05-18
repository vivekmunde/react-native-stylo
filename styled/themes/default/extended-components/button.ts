import { StyleSheet } from 'react-native';
import {
  padding,
  paddingLarge,
  paddingSmall,
  borderRadius,
} from '../variables';

export const ButtonStyles = StyleSheet.create({
  Button: {
    padding,
    borderRadius,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'Button.Small': {
    padding: paddingSmall,
  },
  'Button.Large': {
    padding: paddingLarge,
  },
  'Button.Round': {
    borderRadius: 24,
    padding,
    paddingLeft: padding * 1.5,
    paddingRight: padding * 1.5,
  },
  'Button.Circle': {
    borderRadius: 24,
  },
  'Button.Transparent': {
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
});

export const ButtonTextStyles = StyleSheet.create({
  'Button.Text': {
    fontWeight: '600',
    marginLeft: 4,
    marginRight: 4,
  },
});

export const ButtonIconStyles = StyleSheet.create({
  'Button.Icon': {
    fontWeight: '700',
    marginLeft: 4,
    marginRight: 4,
  },
  'Button.Circle.Icon': {
    lineHeight: 16,
  },
  'Button.Circle.Icon.Small': {
    lineHeight: 12,
  },
  'Button.Circle.Icon.Large': {
    lineHeight: 20,
  },
});
