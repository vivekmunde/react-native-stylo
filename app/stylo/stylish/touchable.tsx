import React from 'react';

import {
  Pressable as StyloPressable,
  TouchableHighlight as StyloTouchableHighlight,
  TouchableOpacity as StyloTouchableOpacity,
  TPressableProps,
  TTouchableHighlightProps,
  TTouchableOpacityProps,
} from '../../../stylo';
import { TStyleNamespace, TTouchableStyle } from '../themes/types';

export const Pressable: React.FC<
  TPressableProps<TTouchableStyle, TStyleNamespace>
> = props => <StyloPressable {...props} />;

export const TouchableHighlight: React.FC<
  TTouchableHighlightProps<TTouchableStyle, TStyleNamespace>
> = props => <StyloTouchableHighlight {...props} />;

export const TouchableOpacity: React.FC<
  TTouchableOpacityProps<TTouchableStyle, TStyleNamespace>
> = props => <StyloTouchableOpacity {...props} />;
