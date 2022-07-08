/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import TBorderStyle from '../generic/border';

export type TAvatarCStyle =
  | 'Avatar'
  | 'Avatar.Square'
  | 'Avatar.Small'
  | 'Avatar.Large';

export type TAvatarStyle =
  | Omit<TBorderStyle, 'Border.Style.Dashed' | 'Border.Style.Dotted'>
  | TAvatarCStyle;

export type TAvatarJacketStyle =
  | 'Avatar.Jacket'
  | 'Avatar.Jacket.Square'
  | 'Avatar.Jacket.Small'
  | 'Avatar.Jacket.Large';
