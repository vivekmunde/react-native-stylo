/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TBadgeStyle, TBadgeTextStyle, TVariable } from '../../../types/__generated__';

export const getBadgeStyles = (variables: Record<TVariable, string | number>) => {
  const fontSize = Number(variables['Font.Size']);
  const fontSizeSmall = Number(variables['Font.Size.Small']);
  const fontSizeLarge = Number(variables['Font.Size.Large']);
  const padding = Number(variables.Padding);

  return StyleSheet.create<Record<TBadgeStyle, ViewStyle>>({
    Badge: {
      paddingLeft: Math.round(padding / 3),
      paddingRight: Math.round(padding / 3),
      borderRadius: fontSize + 8,
      height: fontSize + 8,
      minWidth: fontSize + 8,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    'Badge.Small': {
      paddingLeft: Math.round(padding / 3),
      paddingRight: Math.round(padding / 3),
      borderRadius: fontSizeSmall + 8,
      height: fontSizeSmall + 8,
      minWidth: fontSizeSmall + 8,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    'Badge.Large': {
      paddingLeft: Math.round(padding / 2),
      paddingRight: Math.round(padding / 2),
      borderRadius: fontSizeLarge + 8,
      height: fontSizeLarge + 8,
      minWidth: fontSizeLarge + 8,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export const getBadgeTextStyles = (variables: Record<TVariable, string | number>) => {
  const fontSize = Number(variables['Font.Size']);
  const fontSizeSmall = Number(variables['Font.Size.Small']);
  const fontSizeLarge = Number(variables['Font.Size.Large']);

  return StyleSheet.create<Record<TBadgeTextStyle, TextStyle>>({
    'Badge.Text': {
      fontSize: fontSize,
      lineHeight: fontSize + 2,
    },
    'Badge.Text.Small': {
      fontSize: fontSizeSmall,
      lineHeight: fontSizeSmall + 2,
    },
    'Badge.Text.Large': {
      fontSize: fontSizeLarge,
      lineHeight: fontSizeLarge + 2,
    },
  });
};
