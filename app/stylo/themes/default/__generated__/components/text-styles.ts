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
import { BadgeTextStyles } from '../assorted/badge-styles';
import { ButtonTextStyles } from '../assorted/button-styles';
import { TagTextStyles } from '../assorted/tag-styles';
import FontColorStyles from '../generic/font-color-styles';
import MarginStyles from '../generic/margin-styles';

const fontSize = Number(Variables['Font.Size'] ?? 16);
const fontSizeSmall = Number(Variables['Font.Size.Small'] ?? 12);
const fontSizeLarge = Number(Variables['Font.Size.Large'] ?? 24);
const fontWeight = Variables['Font.Weight'];
const fontWeightBold = Variables['Font.Weight.Bold'];

const h4FontSize = fontSize + 4;
const h3FontSize = h4FontSize + 4;
const h2FontSize = h3FontSize + 6;
const h1FontSize = h2FontSize + 8;

export const TextCStyles = StyleSheet.create({
  Default: {
    color: Variables['Font.Color'],
    fontSize,
    lineHeight: fontSize + 8,
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
  },
  Bold: {
    fontWeight:
      fontWeightBold === '100'
        ? '100'
        : fontWeightBold === '200'
        ? '200'
        : fontWeightBold === '300'
        ? '300'
        : fontWeightBold === '400'
        ? '400'
        : fontWeightBold === '500'
        ? '500'
        : fontWeightBold === '600'
        ? '600'
        : fontWeightBold === '700'
        ? '700'
        : fontWeightBold === '800'
        ? '800'
        : fontWeightBold === '900'
        ? '900'
        : 'bold',
  },
  'Bold.Semi': {
    fontWeight:
      fontWeightBold === '100'
        ? '100'
        : fontWeightBold === '200'
        ? '100'
        : fontWeightBold === '300'
        ? '200'
        : fontWeightBold === '400'
        ? '300'
        : fontWeightBold === '500'
        ? '400'
        : fontWeightBold === '600'
        ? '500'
        : fontWeightBold === '700'
        ? '600'
        : fontWeightBold === '800'
        ? '700'
        : fontWeightBold === '900'
        ? '800'
        : '600',
  },
  'Align.Center': {
    textAlign: 'center',
  },
  'Align.Right': {
    textAlign: 'right',
  },
  H1: {
    fontSize: h1FontSize,
    lineHeight: h1FontSize + 8,
    marginBottom: Variables.Margin,
  },
  H2: {
    fontSize: h2FontSize,
    lineHeight: h2FontSize + 8,
    marginBottom: Variables.Margin,
  },
  H3: {
    fontSize: h3FontSize,
    lineHeight: h3FontSize + 8,
    marginBottom: Variables.Margin * (3 / 4),
  },
  H4: {
    fontSize: h4FontSize,
    lineHeight: h4FontSize + 8,
    marginBottom: Variables.Margin * (3 / 4),
  },
  Small: {
    fontSize: fontSizeSmall,
    lineHeight: fontSizeSmall + 8,
  },
  Large: {
    fontSize: fontSizeLarge,
    lineHeight: fontSizeLarge + 8,
  },
  Paragraph: {
    marginBottom: Variables.Margin,
    width: '100%',
  },
});

const TextStyles = StyleSheet.create({
  ...FontColorStyles,
  ...MarginStyles,
  ...BadgeTextStyles,
  ...ButtonTextStyles,
  ...TagTextStyles,
  ...TextCStyles,
});

export default TextStyles;
