/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TVariable, TViewStyle } from '../../types';
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
    ...getPaddingStyles(variables),
    ...getMarginStyles(variables),
    ...getFlexStyles(),
    ...getHorizontalStyles(),
    ...getBadgeStyles(variables),
    ...getListStyles(variables),
    ...getFormStyles(variables),
    ...getScreenStyles(variables),
    ...getTagStyles(variables),
    Default: {},
  })
);

export default getViewStyles;

