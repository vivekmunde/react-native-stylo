/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.3.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import TBackgroundColorStyle from '../generic/background-color';
import TFontColorStyle from '../generic/font-color';

export type TTextInputCStyle =
  | 'Align.Center'
  | 'Align.Right'
  | 'Bold'
  | 'Small'
  | 'Large';

type TTextInputStyle =
  | TFontColorStyle
  | TBackgroundColorStyle
  | TTextInputCStyle;

export default TTextInputStyle;
