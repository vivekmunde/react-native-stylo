/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { TTextInputCStyle } from '../__generated__/components/text-input';

import TBackgroundColorStyle from '../generic/background-color';
import TFontColorStyle from '../generic/font-color';

type TTextInputStyle =
  | TFontColorStyle
  | TBackgroundColorStyle
  | TTextInputCStyle;

export default TTextInputStyle;
