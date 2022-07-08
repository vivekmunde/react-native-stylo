/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { TBadgeTextStyle } from '../assorted/badge';
import { TButtonTextStyle } from '../assorted/button';
import { TTagTextStyle } from '../assorted/tag';
import TFontColorStyle from '../generic/font-color';
import TMarginStyle from '../generic/margin';

export type TTextCStyle =
  | 'Align.Center'
  | 'Align.Right'
  | 'Bold'
  | 'Italic'
  | 'Bold.Semi'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'Small'
  | 'Large'
  | 'Paragraph';

type TTextStyle =
  | TFontColorStyle
  | TMarginStyle
  | TBadgeTextStyle
  | TButtonTextStyle
  | TTagTextStyle
  | TTextCStyle;

export default TTextStyle;
