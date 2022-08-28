/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TTagAvatarStyle, TTagIconStyle, TTagStyle, TTagTextStyle, TVariable } from '../../types';
import * as _ from '../__generated__/assorted/tag-styles';

export const getTagStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TTagStyle, ViewStyle>>({
    ..._.getTagStyles(variables),
  })
);

export const getTagTextStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TTagTextStyle, TextStyle>>({
    ..._.getTagTextStyles(variables),
  })
);

export const getTagIconStyles = () => (
  StyleSheet.create<Record<TTagIconStyle, TextStyle>>({
    ..._.getTagIconStyles(),
  })
);

export const getTagAvatarStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TTagAvatarStyle, ImageStyle>>({
    ..._.getTagAvatarStyles(variables),
  })
);  
