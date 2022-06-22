import { TBackgroundColor } from './base/background-colors';
import { TBorder as TBorder } from './base/border';
import { TFlex as TFlex } from './base/flex';
import { TMargin as TMargin } from './base/margin';
import { TPadding as TPadding } from './base/padding';
import { TAvatarViewStyle } from './extended-components/avatar';
import { TBadgeStyle } from './extended-components/badge';
import {
  TFormHelpItemBodyStyle,
  TFormHelpItemLeftStyle,
  TFormHelpItemRightStyle,
  TFormHelpItemStyle,
  TFormInputItemBodyStyle,
  TFormInputItemLeftStyle,
  TFormInputItemRightStyle,
  TFormInputItemStyle,
  TFormItemStyle,
  TFormLabelItemBodyStyle,
  TFormLabelItemLeftStyle,
  TFormLabelItemRightStyle,
  TFormLabelItemStyle,
  TFormStyle,
} from './extended-components/form';
import {
  THorizontalBodyStyle,
  THorizontalLeftStyle,
  THorizontalRightStyle,
  THorizontalStyle,
} from './extended-components/horizontal';
import {
  TListItemBodyStyle,
  TListItemLeftStyle,
  TListItemRightStyle,
  TListItemStyle,
  TListStyle,
} from './extended-components/list';
import {
  TScreenBodyStyle,
  TScreenFooterStyle,
  TScreenHeaderStyle,
  TScreenStyle,
} from './extended-components/screen';
import { TTagAvatarViewStyle, TTagStyle } from './extended-components/tag';

export type TViewCommonStyle =
  | TBackgroundColor
  | TBorder
  | TPadding
  | TMargin
  | TFlex
  | THorizontalStyle
  | THorizontalLeftStyle
  | THorizontalBodyStyle
  | THorizontalRightStyle;

export type TViewStyle =
  | TViewCommonStyle
  | TAvatarViewStyle
  | TBadgeStyle
  | TListItemBodyStyle
  | TListItemLeftStyle
  | TListItemRightStyle
  | TListItemStyle
  | TListStyle
  | TFormHelpItemBodyStyle
  | TFormHelpItemLeftStyle
  | TFormHelpItemRightStyle
  | TFormHelpItemStyle
  | TFormInputItemBodyStyle
  | TFormInputItemLeftStyle
  | TFormInputItemRightStyle
  | TFormInputItemStyle
  | TFormItemStyle
  | TFormLabelItemBodyStyle
  | TFormLabelItemLeftStyle
  | TFormLabelItemRightStyle
  | TFormLabelItemStyle
  | TFormStyle
  | TScreenStyle
  | TScreenHeaderStyle
  | TScreenBodyStyle
  | TScreenFooterStyle
  | TTagStyle
  | TTagAvatarViewStyle;
