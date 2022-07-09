/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { TButtonIconStyle } from '../assorted/button';
import { TTagIconStyle } from '../assorted/tag';
import TFontColorStyle from '../generic/font-color';
import TMarginStyle from '../generic/margin';

export type TIconCStyle = 'Small' | 'Large';

type TIconStyle =
  | TFontColorStyle
  | TMarginStyle
  | TButtonIconStyle
  | TTagIconStyle
  | TIconCStyle;

export default TIconStyle;
