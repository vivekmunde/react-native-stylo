import { TFontColor } from './base/font-colors';
import { TBadgeTextStyle } from './extended-components/badge';
import { TButtonTextStyle } from './extended-components/button';
import { TTagTextStyle } from './extended-components/tag';

export type TTextStyle =
  | TFontColor
  | 'Align.Center'
  | 'Align.Right'
  | 'Bold'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'Small'
  | 'Large'
  | 'Paragraph'
  | 'Margin'
  | 'Margin.Top'
  | 'Margin.Right'
  | 'Margin.Bottom'
  | 'Margin.Left'
  | 'Margin.XSmall'
  | 'Margin.Small'
  | 'Margin.Large'
  | 'Margin.Top.Small'
  | 'Margin.Right.Small'
  | 'Margin.Bottom.Small'
  | 'Margin.Left.Small'
  | 'Margin.Top.XSmall'
  | 'Margin.Right.XSmall'
  | 'Margin.Bottom.XSmall'
  | 'Margin.Left.XSmall'
  | 'Margin.Top.Large'
  | 'Margin.Right.Large'
  | 'Margin.Bottom.Large'
  | 'Margin.Left.Large'
  | TBadgeTextStyle
  | TButtonTextStyle
  | TTagTextStyle;
