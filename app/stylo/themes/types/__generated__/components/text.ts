/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.3.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { TBadgeTextStyle } from '../assorted/badge';
import { TButtonTextStyle } from '../assorted/button';
import { TTagTextStyle } from '../assorted/tag';
import TFontColorStyle from '../generic/font-color';

export type TTextCStyle =
  | 'Align.Center'
  | 'Align.Right'
  | 'Bold'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'Small'
  | 'Large'
  | 'Paragraph'
  | 'Margin'
  | 'Margin.Top'
  | 'Margin.Right'
  | 'Margin.Bottom'
  | 'Margin.Left'
  | 'Margin.XSmall'
  | 'Margin.Small'
  | 'Margin.Large'
  | 'Margin.Top.Small'
  | 'Margin.Right.Small'
  | 'Margin.Bottom.Small'
  | 'Margin.Left.Small'
  | 'Margin.Top.XSmall'
  | 'Margin.Right.XSmall'
  | 'Margin.Bottom.XSmall'
  | 'Margin.Left.XSmall'
  | 'Margin.Top.Large'
  | 'Margin.Right.Large'
  | 'Margin.Bottom.Large'
  | 'Margin.Left.Large';

type TTextStyle =
  | TFontColorStyle
  | TBadgeTextStyle
  | TButtonTextStyle
  | TTagTextStyle
  | TTextCStyle;

export default TTextStyle;
