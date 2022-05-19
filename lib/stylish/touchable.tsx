import React from 'react';
import {
  Pressable as RNSPressable,
  TouchableHighlight as RNSTouchableHighlight,
  TouchableOpacity as RNSTouchableOpacity,
  TPressableProps,
  TTouchableHighlightProps,
  TTouchableOpacityProps,
} from 'react-native-stylo';
import { TTouchableStyle } from '../themes/types';

export const Pressable: React.FC<TPressableProps<TTouchableStyle>> = props => (
  <RNSPressable {...props} />
);

export const TouchableHighlight: React.FC<
  TTouchableHighlightProps<TTouchableStyle>
> = props => <RNSTouchableHighlight {...props} />;

export const TouchableOpacity: React.FC<
  TTouchableOpacityProps<TTouchableStyle>
> = props => <RNSTouchableOpacity {...props} />;
