/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, StyleSheet } from 'react-native';
import { TImageStyle, TVariable } from '../../../types/__generated__';
import { getAvatarStyles } from '../assorted/avatar-styles';
import { getTagAvatarStyles } from '../assorted/tag-styles';
import getBorderStyles from '../generic/border-styles';
import getMarginStyles from '../generic/margin-styles';

const getImageStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TImageStyle, ImageStyle>>({
    ...getMarginStyles(variables),
    ...getBorderStyles(variables),
    ...getAvatarStyles(variables),
    ...getTagAvatarStyles(variables),
  })
);

export default getImageStyles;
