/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import {
  TAvatarCStyle,
  TAvatarJacketStyle as _TAvatarJacketStyle,
} from '../__generated__/assorted/avatar';
import TBorderStyle from '../generic/border';

export type TAvatarStyle =
  | Omit<TBorderStyle, 'Border.Style.Dashed' | 'Border.Style.Dotted'>
  | TAvatarCStyle;

export type TAvatarJacketStyle = _TAvatarJacketStyle;
