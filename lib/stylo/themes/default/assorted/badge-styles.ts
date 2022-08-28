/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TBadgeStyle, TBadgeTextStyle, TVariable } from '../../types';
import * as _ from '../__generated__/assorted/badge-styles';

export const getBadgeStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TBadgeStyle, ViewStyle>>({
    ..._.getBadgeStyles(variables),
  })
);

export const getBadgeTextStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TBadgeTextStyle, TextStyle>>({
    ..._.getBadgeTextStyles(variables),
  })
);
