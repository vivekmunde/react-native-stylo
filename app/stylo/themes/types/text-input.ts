import { TBackgroundColor } from './base/background-colors';
import { TFontColor } from './base/font-colors';

export type TTextInputStyle =
  | TFontColor
  | TBackgroundColor
  | 'Align.Center'
  | 'Align.Right'
  | 'Bold'
  | 'Small'
  | 'Large';
