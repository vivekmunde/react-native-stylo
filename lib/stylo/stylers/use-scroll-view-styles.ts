/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */

import {
    useScrollViewContentContainerStyles as useStyloScrollViewContentContainerStyles, useScrollViewStyles as useStyloScrollViewStyles
} from 'react-native-stylo';
import {
    TScrollViewContentContainerStyle, TScrollViewStyle
} from '../themes/types';

export const useScrollViewStyles = (styleNames: TScrollViewStyle[]) =>
  useStyloScrollViewStyles<TScrollViewStyle>(styleNames);

export const useScrollViewContentContainerStyles = (
  styleNames: TScrollViewContentContainerStyle[],
) =>
  useStyloScrollViewContentContainerStyles<TScrollViewContentContainerStyle>(
    styleNames,
  );
