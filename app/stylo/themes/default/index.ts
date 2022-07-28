/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { TStyles } from '../types';
import getIconStyles from './components/icon-styles';
import getImageBackgroundStyles from './components/image-background-styles';
import getImageStyles from './components/image-styles';
import getSafeAreaViewStyles from './components/safe-area-view-styles';
import {
  getScrollViewContentContainerStyles,
  getScrollViewStyles
} from './components/scroll-view-styles';
import getTextInputStyles from './components/text-input-styles';
import getTextStyles from './components/text-styles';
import getTouchableStyles from './components/touchable-styles';
import getViewStyles from './components/view-styles';
import _variables from './variables';

export const variables = _variables;

export const styles: Record<'light' | 'dark', TStyles> = {
  light: {
    IconStyles: getIconStyles(_variables.light),
    ImageBackgroundStyles: getImageBackgroundStyles(_variables.light),
    ImageStyles: getImageStyles(_variables.light),
    SafeAreaViewStyles: getSafeAreaViewStyles(_variables.light),
    ScrollViewStyles: getScrollViewStyles(_variables.light),
    ScrollViewContentContainerStyles: getScrollViewContentContainerStyles(_variables.light),
    TextInputStyles: getTextInputStyles(_variables.light),
    TextStyles: getTextStyles(_variables.light),
    TouchableStyles: getTouchableStyles(_variables.light),
    ViewStyles: getViewStyles(_variables.light),
  },
  dark: {
    IconStyles: getIconStyles(_variables.dark),
    ImageBackgroundStyles: getImageBackgroundStyles(_variables.dark),
    ImageStyles: getImageStyles(_variables.dark),
    SafeAreaViewStyles: getSafeAreaViewStyles(_variables.dark),
    ScrollViewStyles: getScrollViewStyles(_variables.dark),
    ScrollViewContentContainerStyles: getScrollViewContentContainerStyles(_variables.dark),
    TextInputStyles: getTextInputStyles(_variables.dark),
    TextStyles: getTextStyles(_variables.dark),
    TouchableStyles: getTouchableStyles(_variables.dark),
    ViewStyles: getViewStyles(_variables.dark),
  },
};
