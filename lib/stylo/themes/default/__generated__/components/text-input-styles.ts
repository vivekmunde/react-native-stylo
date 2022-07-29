/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle } from 'react-native';
import { TTextInputStyle, TVariable } from '../../../types/__generated__';
import { TTextInputCStyle } from '../../../types/__generated__/components/text-input';
import getBackgroundColorStyles from '../generic/background-color-styles';
import getBorderStyles from '../generic/border-styles';
import getFontColorStyles from '../generic/font-color-styles';
import getMarginStyles from '../generic/margin-styles';
import getPaddingStyles from '../generic/padding-styles';

export const getTextInputCStyles = (variables: Record<TVariable, string | number>) => {
  const fontSize = Number(variables['Font.Size']);
  const fontSizeSmall = Number(variables['Font.Size.Small']);
  const fontSizeLarge = Number(variables['Font.Size.Large']);
  const fontWeight = variables['Font.Weight'];
  const fontWeightBold = variables['Font.Weight.Bold'];

  return StyleSheet.create<Record<TTextInputCStyle, TextStyle>>({
    Default: {
      backgroundColor: 'transparent',
      borderRadius: Number(variables['Border.Radius']),
      color: variables['Font.Color'].toString(),
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
      paddingTop: variables.Padding,
      paddingBottom: variables.Padding,
      paddingLeft: variables.Padding,
      paddingRight: variables.Padding,
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
      paddingTop: variables['Padding.Small'],
      paddingBottom: variables['Padding.Small'],
      paddingLeft: variables['Padding.Small'],
      paddingRight: variables['Padding.Small'],
    },
    Large: {
      fontSize: fontSizeLarge,
      minHeight: Math.round(fontSizeLarge * 2.5),
      paddingTop: variables['Padding.Large'],
      paddingBottom: variables['Padding.Large'],
      paddingLeft: variables['Padding.Large'],
      paddingRight: variables['Padding.Large'],
    },
  });
};

const getTextInputStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TTextInputStyle, TextStyle>>({
    ...getBackgroundColorStyles(variables),
    ...getFontColorStyles(variables),
    ...getBorderStyles(variables),
    ...getMarginStyles(variables),
    ...getPaddingStyles(variables),
    ...getTextInputCStyles(variables),
  })
);

export default getTextInputStyles;
