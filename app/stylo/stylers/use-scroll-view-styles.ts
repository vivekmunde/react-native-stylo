/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import {
  useScrollViewStyles as useStyloScrollViewStyles,
  useScrollViewContentContainerStyles as useStyloScrollViewContentContainerStyles,
} from '../../../stylo';
import {
  TScrollViewStyle,
  TScrollViewContentContainerStyle,
  TStyleNamespace,
} from '../themes/types';

export const useScrollViewStyles = (
  styleNames: TScrollViewStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloScrollViewStyles<TScrollViewStyle, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );

export const useScrollViewContentContainerStyles = (
  styleNames: TScrollViewContentContainerStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloScrollViewContentContainerStyles<
    TScrollViewContentContainerStyle,
    TStyleNamespace
  >(styleNames, styleNamespace);
