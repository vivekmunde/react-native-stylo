/* ------------------------- */
/*      Can be modified      */
/* ------------------------- */

import { TAvatarStyle } from '../assorted/avatar';
import { TTagAvatarImageStyle } from '../assorted/tag';
import TBorderStyle from '../generic/border';
import TMarginStyle from '../generic/margin';

type TImageStyle =
  | TMarginStyle
  | TBorderStyle
  | TAvatarStyle
  | TTagAvatarImageStyle;

export default TImageStyle;
