/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import TBackgroundColorStyle from '../generic/background-color';
import TBorderStyle from '../generic/border';
import TFlexStyle from '../generic/flex';
import TMarginStyle from '../generic/margin';
import TPaddingStyle from '../generic/padding';

export type TScrollViewStyle =
  | TBackgroundColorStyle
  | TBorderStyle
  | TPaddingStyle
  | TMarginStyle
  | TFlexStyle;

export type TScrollViewContentContainerStyle =
  | TBackgroundColorStyle
  | TBorderStyle
  | TPaddingStyle
  | TMarginStyle
  | TFlexStyle;
