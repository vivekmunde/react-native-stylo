import TBackgroundColorStyle from '../generic/background-color';
import TFontColorStyle from '../generic/font-color';

export type TTextInputCStyle =
  | 'Align.Center'
  | 'Align.Right'
  | 'Bold'
  | 'Small'
  | 'Large';

type TTextInputStyle =
  | TFontColorStyle
  | TBackgroundColorStyle
  | TTextInputCStyle;

export default TTextInputStyle;
