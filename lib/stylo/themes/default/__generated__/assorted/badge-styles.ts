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

const fontSize = Number(Variables['Font.Size'] ?? 16);
const fontSizeSmall = Number(Variables['Font.Size.Small'] ?? 12);
const fontSizeLarge = Number(Variables['Font.Size.Large'] ?? 24);
const padding = Variables.Padding;

export const BadgeStyles = StyleSheet.create({
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

export const BadgeTextStyles = StyleSheet.create({
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
