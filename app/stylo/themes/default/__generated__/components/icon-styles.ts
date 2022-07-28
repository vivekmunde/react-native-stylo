/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle } from 'react-native';
import { TIconStyle, TVariable } from '../../../types/__generated__';
import { TIconCStyle } from '../../../types/__generated__/components/icon';
import { getButtonIconStyles } from '../assorted/button-styles';
import { getTagIconStyles } from '../assorted/tag-styles';
import getFontColorStyles from '../generic/font-color-styles';
import getMarginStyles from '../generic/margin-styles';

export const getIconCStyles = (variables: Record<TVariable, string | number>) => {
  const fontSize = Number(variables['Font.Size']);
  const fontSizeSmall = Number(variables['Font.Size.Small']);
  const fontSizeLarge = Number(variables['Font.Size.Large']);
  const fontWeight = variables['Font.Weight'];

  return StyleSheet.create<Record<TIconCStyle, TextStyle>>({
    Default: {
      color: variables['Font.Color'].toString(),
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
};

const getIconStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TIconStyle, TextStyle>>({
    ...getFontColorStyles(variables),
    ...getMarginStyles(variables),
    ...getButtonIconStyles(variables),
    ...getTagIconStyles(),
    ...getIconCStyles(variables),
  })
);

export default getIconStyles;
