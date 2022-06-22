import { TBackgroundColor } from './base/background-colors';
import { TBorder as TBorder } from './base/border';
import { TFlex as TFlex } from './base/flex';
import { TMargin as TMargin } from './base/margin';
import { TPadding as TPadding } from './base/padding';

export type TScrollViewStyle =
  | TBackgroundColor
  | TBorder
  | TPadding
  | TMargin
  | TFlex;

export type TScrollViewContentContainerStyle =
  | TBackgroundColor
  | TBorder
  | TPadding
  | TMargin
  | TFlex;
