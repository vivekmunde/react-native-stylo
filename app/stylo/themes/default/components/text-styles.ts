/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle } from 'react-native';
import { TTextStyle, TVariable } from '../../types';
import { getBadgeTextStyles } from '../assorted/badge-styles';
import { getButtonTextStyles } from '../assorted/button-styles';
import { getTagTextStyles } from '../assorted/tag-styles';
import getFontColorStyles from '../generic/font-color-styles';
import getMarginStyles from '../generic/margin-styles';
import { getTextCStyles } from '../__generated__/components/text-styles';

const getTextStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TTextStyle, TextStyle>>({
    ...getFontColorStyles(variables),
    ...getMarginStyles(variables),
    ...getBadgeTextStyles(variables),
    ...getButtonTextStyles(variables),
    ...getTagTextStyles(variables),
    ...getTextCStyles(variables),
  })
);

export default getTextStyles;
