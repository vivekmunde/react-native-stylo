import { TBackgroundColor } from './background-colors';
import { TFontColor } from './font-colors';

export type TVariables =
  | TFontColor
  | TBackgroundColor
  | 'Padding'
  | 'Padding.XSmall'
  | 'Padding.Small'
  | 'Padding.Large'
  | 'Margin'
  | 'Margin.XSmall'
  | 'Margin.Small'
  | 'Margin.Large'
  | 'Border.Width'
  | 'Border.Radius'
  | 'Border.Radius.Small'
  | 'Border.Radius.Large';
