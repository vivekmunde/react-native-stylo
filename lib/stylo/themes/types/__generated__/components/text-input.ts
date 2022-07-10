/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import TBackgroundColorStyle from '../generic/background-color';
import TBorderStyle from '../generic/border';
import TFontColorStyle from '../generic/font-color';
import TMarginStyle from '../generic/margin';
import TPaddingStyle from '../generic/padding';

export type TTextInputCStyle =
  | 'Align.Center'
  | 'Align.Right'
  | 'Bold'
  | 'Bold.Semi'
  | 'Small'
  | 'Large';

type TTextInputStyle =
  | TFontColorStyle
  | TBackgroundColorStyle
  | TBorderStyle
  | TMarginStyle
  | TPaddingStyle
  | TTextInputCStyle;

export default TTextInputStyle;
