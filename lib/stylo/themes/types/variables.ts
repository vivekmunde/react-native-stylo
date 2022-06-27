import TColor from './color';

type TVariable =
  | TColor
  | 'Font.Color'
  | 'Border.Color'
  | 'Border.Width'
  | 'Border.Radius'
  | 'Border.Radius.Small'
  | 'Border.Radius.Large'
  | 'Margin'
  | 'Margin.XSmall'
  | 'Margin.Small'
  | 'Margin.Large'
  | 'Padding'
  | 'Padding.XSmall'
  | 'Padding.Small'
  | 'Padding.Large';

export default TVariable;
