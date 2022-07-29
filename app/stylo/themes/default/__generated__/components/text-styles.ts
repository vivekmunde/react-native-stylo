/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle } from 'react-native';
import { TTextStyle, TVariable } from '../../../types/__generated__';
import { TTextCStyle } from '../../../types/__generated__/components/text';
import { getBadgeTextStyles } from '../assorted/badge-styles';
import { getButtonTextStyles } from '../assorted/button-styles';
import { getTagTextStyles } from '../assorted/tag-styles';
import getFontColorStyles from '../generic/font-color-styles';
import getMarginStyles from '../generic/margin-styles';

export const getTextCStyles = (variables: Record<TVariable, string | number>) => {
  const fontSize = Number(variables['Font.Size']);
  const fontSizeSmall = Number(variables['Font.Size.Small']);
  const fontSizeLarge = Number(variables['Font.Size.Large']);
  const fontWeight = variables['Font.Weight'];
  const fontWeightBold = variables['Font.Weight.Bold'];
  const margin = Number(variables.Margin);

  const h4FontSize = fontSize + 4;
  const h3FontSize = h4FontSize + 4;
  const h2FontSize = h3FontSize + 6;
  const h1FontSize = h2FontSize + 8;

  return StyleSheet.create<Record<TTextCStyle, TextStyle>>({
    Default: {
      color: variables['Font.Color'].toString(),
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
    Italic: {
      fontStyle: 'italic',
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
      marginBottom: variables.Margin,
    },
    H2: {
      fontSize: h2FontSize,
      lineHeight: h2FontSize + 8,
      marginBottom: variables.Margin,
    },
    H3: {
      fontSize: h3FontSize,
      lineHeight: h3FontSize + 8,
      marginBottom: margin * (3 / 4),
    },
    H4: {
      fontSize: h4FontSize,
      lineHeight: h4FontSize + 8,
      marginBottom: margin * (3 / 4),
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
      marginBottom: variables.Margin,
      width: '100%',
    },
  });
};

const getTextStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TTextStyle, TextStyle>>({
    ...getFontColorStyles(variables),
    ...getMarginStyles(variables),
    ...getBadgeTextStyles(variables),
    ...getButtonTextStyles(variables),
    ...getTagTextStyles(variables),
    ...getTextCStyles(variables),
  })
);

export default getTextStyles;
