/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { TIconCStyle } from '../__generated__/components/icon';

import { TButtonIconStyle } from '../assorted/button';
import { TTagIconStyle } from '../assorted/tag';
import TFontColorStyle from '../generic/font-color';
import TMarginStyle from '../generic/margin';

type TIconStyle =
  | TFontColorStyle
  | TMarginStyle
  | TButtonIconStyle
  | TTagIconStyle
  | TIconCStyle;

export default TIconStyle;
