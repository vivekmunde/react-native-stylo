/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
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
import _TVariable from './variable';

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

// ------------------------------------------------------------------------------------------------
// TBD
// ------------------------------------------------------------------------------------------------

// Group: Horizontal & Vertical
// Checkbox
// Radio
// Message/Alert
// Card
