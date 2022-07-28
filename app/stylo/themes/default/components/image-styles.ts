/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, StyleSheet } from 'react-native';
import { TImageStyle, TVariable } from '../../types';
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
