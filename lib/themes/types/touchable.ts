import { TViewStyle } from './view';
import {
  TListStyle,
  TListItemStyle,
  TListItemLeftStyle,
  TListItemBodyStyle,
  TListItemRightStyle,
} from './extended-components/list';
import { TAvatarViewStyle } from './extended-components/avatar';
import { TButtonStyle } from './extended-components/button';
import { TTagStyle } from './extended-components/tag';

export type TTouchableStyle =
  | TViewStyle
  | TButtonStyle
  | TAvatarViewStyle
  | TListStyle
  | TListItemStyle
  | TListItemLeftStyle
  | TListItemBodyStyle
  | TListItemRightStyle
  | TTagStyle;
