/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import Variables from '../../variables';
import { ButtonIconStyles } from '../assorted/button-styles';
import { TagIconStyles } from '../assorted/tag-styles';
import FontColorStyles from '../generic/font-color-styles';
import MarginStyles from '../generic/margin-styles';

const fontSize = Number(Variables['Font.Size'] ?? 16);
const fontSizeSmall = Number(Variables['Font.Size.Small'] ?? 12);
const fontSizeLarge = Number(Variables['Font.Size.Large'] ?? 24);
const fontWeight = Variables['Font.Weight'];

export const IconCStyles = StyleSheet.create({
  Default: {
    color: Variables['Font.Color'],
    fontSize: fontSize,
    fontWeight:
      fontWeight === '100'
        ? '100'
        : fontWeight === '200'
        ? '200'
        : fontWeight === '300'
        ? '300'
        : fontWeight === '400'
        ? '400'
        : fontWeight === '500'
        ? '500'
        : fontWeight === '600'
        ? '600'
        : fontWeight === '700'
        ? '700'
        : fontWeight === '800'
        ? '800'
        : fontWeight === '900'
        ? '900'
        : 'normal',
    lineHeight: fontSize + 8,
  },
  Small: {
    fontSize: fontSizeSmall,
    lineHeight: fontSizeSmall + 8,
  },
  Large: {
    fontSize: fontSizeLarge,
    lineHeight: fontSizeLarge + 8,
  },
});

const IconStyles = StyleSheet.create({
  ...FontColorStyles,
  ...MarginStyles,
  ...ButtonIconStyles,
  ...TagIconStyles,
  ...IconCStyles,
});

export default IconStyles;
