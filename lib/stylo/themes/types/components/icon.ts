/* ------------------------- */
/*      Can be modified      */
/* ------------------------- */

import { TIconCStyle } from '../__generated__/components/icon';

import { TButtonIconStyle } from '../assorted/button';
import { TTagIconStyle } from '../assorted/tag';
import TFontColorStyle from '../generic/font-color';

type TIconStyle =
  | TFontColorStyle
  | TButtonIconStyle
  | TTagIconStyle
  | TIconCStyle;

export default TIconStyle;
