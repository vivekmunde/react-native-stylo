import TBackgroundColorStyle from '../generic/background-color';
import TFontColorStyle from '../generic/font-color';

type TTextInputStyle =
  | TFontColorStyle
  | TBackgroundColorStyle
  | 'Align.Center'
  | 'Align.Right'
  | 'Bold'
  | 'Small'
  | 'Large';

export default TTextInputStyle;
