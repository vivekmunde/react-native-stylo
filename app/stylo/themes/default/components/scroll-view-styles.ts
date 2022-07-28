/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TScrollViewContentContainerStyle, TScrollViewStyle, TVariable } from '../../types';
import getBackgroundColorStyles from '../generic/background-color-styles';
import getBorderStyles from '../generic/border-styles';
import getFlexStyles from '../generic/flex-styles';
import getMarginStyles from '../generic/margin-styles';
import getPaddingStyles from '../generic/padding-styles';

export const getScrollViewStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TScrollViewStyle, ViewStyle>>({
    ...getBackgroundColorStyles(variables),
    ...getBorderStyles(variables),
    ...getPaddingStyles(variables),
    ...getMarginStyles(variables),
    ...getFlexStyles(),
  })
);

export const getScrollViewContentContainerStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TScrollViewContentContainerStyle, ViewStyle>>({
    ...getBackgroundColorStyles(variables),
    ...getBorderStyles(variables),
    ...getPaddingStyles(variables),
    ...getMarginStyles(variables),
    ...getFlexStyles(),
  })
);
