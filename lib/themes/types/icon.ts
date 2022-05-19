import { TFontColor } from './base/font-colors';
import { TButtonIconStyle } from './extended-components/button';
import { TTagIconStyle } from './extended-components/tag';

export type TIconStyle =
  | TFontColor
  | 'Bold'
  | 'Small'
  | 'Large'
  | 'Margin'
  | 'Margin.Top'
  | 'Margin.Right'
  | 'Margin.Bottom'
  | 'Margin.Left'
  | 'Margin.XSmall'
  | 'Margin.Small'
  | 'Margin.Large'
  | 'Margin.Top.XSmall'
  | 'Margin.Right.XSmall'
  | 'Margin.Bottom.XSmall'
  | 'Margin.Left.XSmall'
  | 'Margin.Top.Small'
  | 'Margin.Right.Small'
  | 'Margin.Bottom.Small'
  | 'Margin.Left.Small'
  | 'Margin.Top.Large'
  | 'Margin.Right.Large'
  | 'Margin.Bottom.Large'
  | 'Margin.Left.Large'
  | TButtonIconStyle
  | TTagIconStyle;
