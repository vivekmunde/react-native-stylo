/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TButtonIconStyle, TButtonStyle, TButtonTextStyle, TVariable } from '../../../types/__generated__';

export const getButtonStyles = (variables: Record<TVariable, string | number>) => {
  const padding = Number(variables.Padding);
  const avatarSize = Number(variables['Avatar.Size']);

  return StyleSheet.create<Record<TButtonStyle, ViewStyle>>({
    Button: {
      padding: padding,
      borderRadius: Number(variables['Border.Radius']),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    'Button.Small': {
      padding: variables['Padding.Small'],
    },
    'Button.Large': {
      padding: variables['Padding.Large'],
    },
    'Button.Round': {
      borderRadius: padding + avatarSize,
      padding: padding,
      paddingLeft: padding * 1.5,
      paddingRight: padding * 1.5,
    },
    'Button.Circle': {
      borderRadius: padding + avatarSize,
    },
    'Button.Transparent': {
      borderWidth: 0,
      borderRadius: 0,
      backgroundColor: 'transparent',
    },
  });
};

export const getButtonTextStyles = (variables: Record<TVariable, string | number>) => {
  const fontSize = Number(variables['Font.Size']);
  const fontSizeSmall = Number(variables['Font.Size.Small']);
  const fontSizeLarge = Number(variables['Font.Size.Large']);

  return StyleSheet.create<Record<TButtonTextStyle, TextStyle>>({
    'Button.Text': {
      fontSize: fontSize + 2,
      lineHeight: fontSize + 2 + 8,
      fontWeight: '500',
      marginLeft: 4,
      marginRight: 4,
    },
  });
};

export const getButtonIconStyles = (variables: Record<TVariable, string | number>) => {
  const fontSize = Number(variables['Font.Size']);
  const fontSizeSmall = Number(variables['Font.Size.Small']);
  const fontSizeLarge = Number(variables['Font.Size.Large']);

  return StyleSheet.create<Record<TButtonIconStyle, TextStyle>>({
    'Button.Icon': {},
    'Button.Icon.Left': {
      marginRight: 4,
    },
    'Button.Icon.Right': {
      marginLeft: 4,
    },
    'Button.Circle.Icon': {
      fontSize,
      lineHeight: fontSize,
      marginLeft: 0,
      marginRight: 0,
    },
    'Button.Circle.Icon.Small': {
      fontSize: fontSizeSmall,
      lineHeight: fontSizeSmall,
      marginLeft: 0,
      marginRight: 0,
    },
    'Button.Circle.Icon.Large': {
      fontSize: fontSizeLarge,
      lineHeight: fontSizeLarge,
      marginLeft: 0,
      marginRight: 0,
    },
  });
};
