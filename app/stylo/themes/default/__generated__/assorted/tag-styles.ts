/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TTagAvatarStyle, TTagIconStyle, TTagStyle, TTagTextStyle, TVariable } from '../../../types/__generated__';

export const getTagStyles = (variables: Record<TVariable, string | number>) => {
  const fontSize = Number(variables['Font.Size']);
  const padding = Number(variables.Padding);
  const paddingSmall = Number(variables['Padding.Small']);
  const paddingMini = Number(variables['Padding.Mini']);

  return StyleSheet.create<Record<TTagStyle, ViewStyle>>({
    Tag: {
      padding: paddingSmall - 4,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: variables['Margin.Mini'],
      marginBottom: variables['Margin.Mini'],
      borderRadius: Math.round(
        (paddingSmall + fontSize) * 2,
      ),
    },
    'Tag.Small': {
      padding: Math.max(paddingMini - 2, 4),
    },
    'Tag.Large': {
      padding: padding - 4,
    },
  });
};

export const getTagTextStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TTagTextStyle, TextStyle>>({
    'Tag.Text': {
      marginLeft: variables['Margin.Small'],
      marginRight: variables['Margin.Small'],
    },
    'Tag.Text.Left': {
      marginRight: variables['Margin.Small'],
    },
    'Tag.Text.Right': {
      marginLeft: variables['Margin.Small'],
    },
  })
);

export const getTagIconStyles = () => (
  StyleSheet.create<Record<TTagIconStyle, TextStyle>>({
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
  })
);

export const getTagAvatarStyles = (variables: Record<TVariable, string | number>) => {
  const fontSize = Number(variables['Font.Size']);
  const fontSizeSmall = Number(variables['Font.Size.Small']);
  const fontSizeLarge = Number(variables['Font.Size.Large']);

  return StyleSheet.create<Record<TTagAvatarStyle, ImageStyle>>({
    'Tag.Avatar': {
      height: fontSize + 8,
      width: fontSize + 8,
      borderRadius: fontSize + 8,
      marginLeft: 2,
      marginRight: 2,
    },
    'Tag.Avatar.Small': {
      height: fontSizeSmall + 8,
      width: fontSizeSmall + 8,
      borderRadius: fontSizeSmall + 8,
      marginLeft: 2,
      marginRight: 2,
    },
    'Tag.Avatar.Large': {
      height: fontSizeLarge + 8,
      width: fontSizeLarge + 8,
      borderRadius: fontSizeLarge + 8,
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
};
