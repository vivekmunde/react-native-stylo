/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import * as _TAvatar from './assorted/avatar';
import * as _TBadge from './assorted/badge';
import * as _TButton from './assorted/button';
import _TFormStyle from './assorted/form';
import _THorizontalStyle from './assorted/horizontal';
import _TListStyle from './assorted/list';
import _TScreenStyle from './assorted/screen';
import * as _TTag from './assorted/tag';
import _TIconStyle from './components/icon';
import _TImageStyle from './components/image';
import _TImageBackgroundStyle from './components/image-background';
import _TSafeAreaViewStyle from './components/safe-area-view';
import {
  TScrollViewContentContainerStyle as _TScrollViewContentContainerStyle,
  TScrollViewStyle as _TScrollViewStyle
} from './components/scroll-view';
import _TTextStyle from './components/text';
import _TTextInputStyle from './components/text-input';
import _TTouchableStyle from './components/touchable';
import _TViewStyle from './components/view';
import _TBackgroundColorStyle from './generic/background-color';
import _TBorderStyle from './generic/border';
import _TFlexStyle from './generic/flex';
import _TFontColorStyle from './generic/font-color';
import _TMarginStyle from './generic/margin';
import _TPaddingStyle from './generic/padding';
import _TVariable from './variable';

export type TBackgroundColorStyle = _TBackgroundColorStyle;
export type TBorderStyle = _TBorderStyle;
export type TFlexStyle = _TFlexStyle;
export type TFontColorStyle = _TFontColorStyle;
export type TMarginStyle = _TMarginStyle;
export type TPaddingStyle = _TPaddingStyle;

export type TAvatarJacketStyle = _TAvatar.TAvatarJacketStyle;
export type TAvatarStyle = _TAvatar.TAvatarStyle;
export type TBadgeStyle = _TBadge.TBadgeStyle;
export type TBadgeTextStyle = _TBadge.TBadgeTextStyle;
export type TButtonIconStyle = _TButton.TButtonIconStyle;
export type TButtonStyle = _TButton.TButtonStyle;
export type TButtonTextStyle = _TButton.TButtonTextStyle;
export type TFormStyle = _TFormStyle;
export type THorizontalStyle = _THorizontalStyle;
export type TListStyle = _TListStyle;
export type TScreenStyle = _TScreenStyle;
export type TTagAvatarStyle = _TTag.TTagAvatarStyle;
export type TTagIconStyle = _TTag.TTagIconStyle;
export type TTagStyle = _TTag.TTagStyle
export type TTagTextStyle = _TTag.TTagTextStyle;

export type TIconStyle = _TIconStyle;
export type TImageBackgroundStyle = _TImageBackgroundStyle;
export type TImageStyle = _TImageStyle;
export type TSafeAreaViewStyle = _TSafeAreaViewStyle;
export type TScrollViewStyle = _TScrollViewStyle;
export type TScrollViewContentContainerStyle =
  _TScrollViewContentContainerStyle;
export type TTextInputStyle = _TTextInputStyle;
export type TTextStyle = _TTextStyle;
export type TTouchableStyle = _TTouchableStyle;
export type TViewStyle = _TViewStyle;

export type TVariable = _TVariable;
export type TVariables = Record<_TVariable, string | number>;

export type TStyles = {
  IconStyles: Record<TIconStyle, TextStyle>;
  ImageBackgroundStyles: Record<TImageBackgroundStyle, ViewStyle>;
  ImageStyles: Record<TImageStyle, ImageStyle>,
  SafeAreaViewStyles: Record<TSafeAreaViewStyle, ViewStyle>,
  ScrollViewStyles: Record<TScrollViewStyle, ViewStyle>,
  ScrollViewContentContainerStyles: Record<TScrollViewContentContainerStyle, ViewStyle>,
  TextInputStyles: Record<TTextInputStyle, TextStyle>,
  TextStyles: Record<TTextStyle, TextStyle>,
  TouchableStyles: Record<TTouchableStyle, ViewStyle>,
  ViewStyles: Record<TViewStyle, ViewStyle>,
};

export type TThemeFlavour = 'Light' | 'Dark';
