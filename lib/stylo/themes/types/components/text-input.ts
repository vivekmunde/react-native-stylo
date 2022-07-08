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
import TBorderStyle from '../generic/border';
import TFontColorStyle from '../generic/font-color';
import TMarginStyle from '../generic/margin';
import TPaddingStyle from '../generic/padding';

type TTextInputStyle =
  | TFontColorStyle
  | TBackgroundColorStyle
  | TBorderStyle
  | TMarginStyle
  | TPaddingStyle
  | TTextInputCStyle;

export default TTextInputStyle;
