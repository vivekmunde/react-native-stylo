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
  | 'Margin.XSmall'
  | 'Margin.Small'
  | 'Margin.Large'
  | 'Padding'
  | 'Padding.XSmall'
  | 'Padding.Small'
  | 'Padding.Large'
  | 'Avatar.Size'
  | 'Avatar.Size.Small'
  | 'Avatar.Size.Large';

export default TVariable;
