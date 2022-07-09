/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */

import {
  useScrollViewStyles as useStyloScrollViewStyles,
  useScrollViewContentContainerStyles as useStyloScrollViewContentContainerStyles,
} from '../../../stylo';
import {
  TScrollViewStyle,
  TScrollViewContentContainerStyle,
} from '../themes/types';

export const useScrollViewStyles = (styleNames: TScrollViewStyle[]) =>
  useStyloScrollViewStyles<TScrollViewStyle>(styleNames);

export const useScrollViewContentContainerStyles = (
  styleNames: TScrollViewContentContainerStyle[],
) =>
  useStyloScrollViewContentContainerStyles<TScrollViewContentContainerStyle>(
    styleNames,
  );
