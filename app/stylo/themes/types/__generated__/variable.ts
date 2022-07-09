/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import TColor from './color';

type TVariable =
  | TColor
  | 'Body.Color'
  | 'Font.Color'
  | 'Font.Size'
  | 'Font.Size.Small'
  | 'Font.Size.Large'
  | 'Font.Weight'
  | 'Font.Weight.Bold'
  | 'Border.Color'
  | 'Border.Width'
  | 'Border.Radius'
  | 'Border.Radius.Small'
  | 'Border.Radius.Large'
  | 'Margin'
  | 'Margin.Mini'
  | 'Margin.Small'
  | 'Margin.Large'
  | 'Padding'
  | 'Padding.Mini'
  | 'Padding.Small'
  | 'Padding.Large'
  | 'Avatar.Size'
  | 'Avatar.Size.Small'
  | 'Avatar.Size.Large';

export default TVariable;
