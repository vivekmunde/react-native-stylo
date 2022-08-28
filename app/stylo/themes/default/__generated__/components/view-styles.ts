/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TVariable, TViewStyle } from '../../../types/__generated__';
import { getBadgeStyles } from '../assorted/badge-styles';
import getFormStyles from '../assorted/form-styles';
import getHorizontalStyles from '../assorted/horizontal-styles';
import getListStyles from '../assorted/list-styles';
import getScreenStyles from '../assorted/screen-styles';
import { getTagStyles } from '../assorted/tag-styles';
import getBackgroundColorStyles from '../generic/background-color-styles';
import getBorderStyles from '../generic/border-styles';
import getFlexStyles from '../generic/flex-styles';
import getMarginStyles from '../generic/margin-styles';
import getPaddingStyles from '../generic/padding-styles';

const getViewStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TViewStyle, ViewStyle>>({
    ...getBackgroundColorStyles(variables),
    ...getBorderStyles(variables),
    ...getFlexStyles(),
    ...getMarginStyles(variables),
    ...getPaddingStyles(variables),
    ...getHorizontalStyles(),
    ...getBadgeStyles(variables),
    ...getTagStyles(variables),
    ...getFormStyles(variables),
    ...getListStyles(variables),
    ...getScreenStyles(variables),
    Default: {
      padding: 0,
      margin: 0,
    },
  })
);

export default getViewStyles;
