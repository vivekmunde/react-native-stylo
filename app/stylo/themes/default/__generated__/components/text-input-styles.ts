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
import BackgroundColorStyles from '../generic/background-color-styles';
import BorderStyles from '../generic/border-styles';
import FontColorStyles from '../generic/font-color-styles';
import MarginStyles from '../generic/margin-styles';
import PaddingStyles from '../generic/padding-styles';

const fontSize = Number(Variables['Font.Size'] ?? 16);
const fontSizeSmall = Number(Variables['Font.Size.Small'] ?? 12);
const fontSizeLarge = Number(Variables['Font.Size.Large'] ?? 24);
const fontWeight = Variables['Font.Weight'];
const fontWeightBold = Variables['Font.Weight.Bold'];

const padding = Number(Variables.Padding ?? 12);
const paddingSmall = Number(Variables['Padding.Small'] ?? 8);
const paddingLarge = Number(Variables['Padding.Large'] ?? 16);

export const TextInputCStyles = StyleSheet.create({
  Default: {
    backgroundColor: 'transparent',
    borderRadius: Variables['Border.Radius'],
    color: Variables['Font.Color'],
    fontSize,
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
    minHeight: Math.round(fontSize * 2.5),
    paddingTop: padding,
    paddingBottom: padding,
    paddingLeft: padding,
    paddingRight: padding,
    width: '100%',
  },
  'Align.Center': {
    textAlign: 'center',
  },
  'Align.Right': {
    textAlign: 'right',
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
  Small: {
    fontSize: fontSizeSmall,
    minHeight: fontSizeSmall * 2,
    paddingTop: paddingSmall,
    paddingBottom: paddingSmall,
    paddingLeft: paddingSmall,
    paddingRight: paddingSmall,
  },
  Large: {
    fontSize: fontSizeLarge,
    minHeight: Math.round(fontSizeLarge * 2.5),
    paddingTop: paddingLarge,
    paddingBottom: paddingLarge,
    paddingLeft: paddingLarge,
    paddingRight: paddingLarge,
  },
});

const TextInputStyles = StyleSheet.create({
  ...BackgroundColorStyles,
  ...FontColorStyles,
  ...BorderStyles,
  ...MarginStyles,
  ...PaddingStyles,
  ...TextInputCStyles,
});

export default TextInputStyles;
