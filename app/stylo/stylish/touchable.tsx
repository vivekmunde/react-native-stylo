/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import {
  Pressable as StyloPressable,
  TouchableHighlight as StyloTouchableHighlight,
  TouchableOpacity as StyloTouchableOpacity,
  TPressableProps,
  TTouchableHighlightProps,
  TTouchableOpacityProps,
} from '../../../stylo';
import { TTouchableStyle } from '../themes/types';

export const Pressable: React.FC<TPressableProps<TTouchableStyle>> = props => (
  <StyloPressable {...props} />
);

export const TouchableHighlight: React.FC<
  TTouchableHighlightProps<TTouchableStyle>
> = props => <StyloTouchableHighlight {...props} />;

export const TouchableOpacity: React.FC<
  TTouchableOpacityProps<TTouchableStyle>
> = props => <StyloTouchableOpacity {...props} />;
