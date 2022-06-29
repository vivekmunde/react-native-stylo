/* ------------------------- */
/*      Can be modified      */
/* ------------------------- */

import { TTextInputCStyle } from '../__generated__/components/text-input';

import TBackgroundColorStyle from '../generic/background-color';
import TFontColorStyle from '../generic/font-color';

type TTextInputStyle =
  | TFontColorStyle
  | TBackgroundColorStyle
  | TTextInputCStyle;

export default TTextInputStyle;
