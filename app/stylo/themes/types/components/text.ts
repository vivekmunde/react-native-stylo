/* ------------------------- */
/*      Can be modified      */
/* ------------------------- */

import { TTextCStyle } from '../__generated__/components/text';

import { TBadgeTextStyle } from '../assorted/badge';
import { TButtonTextStyle } from '../assorted/button';
import { TTagTextStyle } from '../assorted/tag';
import TFontColorStyle from '../generic/font-color';

type TTextStyle =
  | TFontColorStyle
  | TBadgeTextStyle
  | TButtonTextStyle
  | TTagTextStyle
  | TTextCStyle;

export default TTextStyle;
