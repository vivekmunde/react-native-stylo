/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle } from 'react-native';
import { TIconStyle, TVariable } from '../../types';
import { getButtonIconStyles } from '../assorted/button-styles';
import { getTagIconStyles } from '../assorted/tag-styles';
import getFontColorStyles from '../generic/font-color-styles';
import getMarginStyles from '../generic/margin-styles';
import { getIconCStyles } from '../__generated__/components/icon-styles';

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
