/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { TAvatarStyle } from '../assorted/avatar';
import { TTagAvatarStyle } from '../assorted/tag';
import TBorderStyle from '../generic/border';
import TMarginStyle from '../generic/margin';

type TImageStyle =
  | TMarginStyle
  | TBorderStyle
  | TAvatarStyle
  | TTagAvatarStyle;

export default TImageStyle;
