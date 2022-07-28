/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TTouchableStyle, TVariable } from '../../../types/__generated__';
import { getAvatarJacketStyles } from '../assorted/avatar-styles';
import { getBadgeStyles } from '../assorted/badge-styles';
import { getButtonStyles } from '../assorted/button-styles';
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

const getTouchableStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TTouchableStyle, ViewStyle>>({
    ...getBackgroundColorStyles(variables),
    ...getBorderStyles(variables),
    ...getFlexStyles(),
    ...getMarginStyles(variables),
    ...getPaddingStyles(variables),
    ...getHorizontalStyles(),
    ...getAvatarJacketStyles(variables),
    ...getBadgeStyles(variables),
    ...getFormStyles(variables),
    ...getTagStyles(variables),
    ...getListStyles(variables),
    ...getScreenStyles(variables),
    ...getButtonStyles(variables),
  })
);

export default getTouchableStyles;
