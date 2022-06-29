import { TAvatarJacketStyle } from '../assorted/avatar';
import { TBadgeStyle } from '../assorted/badge';
import TFormStyle from '../assorted/form';
import THorizontalStyle from '../assorted/horizontal';
import TListStyle from '../assorted/list';
import TScreenStyle from '../assorted/screen';
import { TTagStyle } from '../assorted/tag';
import TBackgroundColorStyle from '../generic/background-color';
import TBorderStyle from '../generic/border';
import TFlexStyle from '../generic/flex';
import TMarginStyle from '../generic/margin';
import TPaddingStyle from '../generic/padding';

type TViewStyle =
  | TBackgroundColorStyle
  | TBorderStyle
  | TPaddingStyle
  | TMarginStyle
  | TFlexStyle
  | THorizontalStyle
  | TAvatarJacketStyle
  | TBadgeStyle
  | TListStyle
  | TFormStyle
  | TScreenStyle
  | TTagStyle;

export default TViewStyle;
