/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.0                                   */
/* -------------------------------------------------------------------------------- */

import _useIconStyles from './use-icon-styles';
import _useImageBackgroundStyles from './use-image-background-styles';
import _useImageStyles from './use-image-styles';
import _useSafeAreaViewStyles from './use-safe-area-view-styles';
import {
  useScrollViewContentContainerStyles as _useScrollViewContentContainerStyles,
  useScrollViewStyles as _useScrollViewStyles,
} from './use-scroll-view-styles';
import _useTextInputStyles from './use-text-input-styles';
import _useTextStyles from './use-text-styles';
import _useTouchableStyles from './use-touchable-styles';
import _useVariables from './use-variables';
import _useViewStyles from './use-view-styles';

export const useIconStyles = _useIconStyles;
export const useImageBackgroundStyles = _useImageBackgroundStyles;
export const useImageStyles = _useImageStyles;
export const useSafeAreaViewStyles = _useSafeAreaViewStyles;
export const useScrollViewStyles = _useScrollViewStyles;
export const useScrollViewContentContainerStyles =
  _useScrollViewContentContainerStyles;
export const useTextInputStyles = _useTextInputStyles;
export const useTextStyles = _useTextStyles;
export const useTouchableStyles = _useTouchableStyles;
export const useVariables = _useVariables;
export const useViewStyles = _useViewStyles;

const Stylers = {
  useIconStyles,
  useImageBackgroundStyles,
  useImageStyles,
  useSafeAreaViewStyles,
  useScrollViewStyles,
  useScrollViewContentContainerStyles,
  useTextInputStyles,
  useTextStyles,
  useTouchableStyles,
  useVariables,
  useViewStyles,
};

export default Stylers;
