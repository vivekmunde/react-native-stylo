/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

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
