/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { TTextCStyle } from '../__generated__/components/text';

import { TBadgeTextStyle } from '../assorted/badge';
import { TButtonTextStyle } from '../assorted/button';
import { TTagTextStyle } from '../assorted/tag';
import TFontColorStyle from '../generic/font-color';
import TMarginStyle from '../generic/margin';

type TTextStyle =
  | TFontColorStyle
  | TMarginStyle
  | TBadgeTextStyle
  | TButtonTextStyle
  | TTagTextStyle
  | TTextCStyle;

export default TTextStyle;
