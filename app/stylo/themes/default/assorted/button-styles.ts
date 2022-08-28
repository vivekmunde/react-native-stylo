/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TButtonIconStyle, TButtonStyle, TButtonTextStyle, TVariable } from '../../types';
import * as _ from '../__generated__/assorted/button-styles';

export const getButtonStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TButtonStyle, ViewStyle>>({
    ..._.getButtonStyles(variables),
  })
);

export const getButtonTextStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TButtonTextStyle, TextStyle>>({
    ..._.getButtonTextStyles(variables),
  })
);

export const getButtonIconStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TButtonIconStyle, TextStyle>>({
    ..._.getButtonIconStyles(variables),
  })
);  
