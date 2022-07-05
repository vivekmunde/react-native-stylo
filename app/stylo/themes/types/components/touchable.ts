/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { TAvatarJacketStyle } from '../assorted/avatar';
import { TBadgeStyle } from '../assorted/badge';
import { TButtonStyle } from '../assorted/button';
import THorizontalStyle from '../assorted/horizontal';
import TListStyle from '../assorted/list';
import TScreenStyle from '../assorted/screen';
import { TTagStyle } from '../assorted/tag';
import TBackgroundColorStyle from '../generic/background-color';
import TBorderStyle from '../generic/border';
import TFlexStyle from '../generic/flex';
import TMarginStyle from '../generic/margin';
import TPaddingStyle from '../generic/padding';

type TTouchableStyle =
  | TBackgroundColorStyle
  | TBorderStyle
  | TPaddingStyle
  | TMarginStyle
  | TFlexStyle
  | THorizontalStyle
  | TAvatarJacketStyle
  | TBadgeStyle
  | TListStyle
  | TScreenStyle
  | TTagStyle
  | TButtonStyle;

export default TTouchableStyle;
