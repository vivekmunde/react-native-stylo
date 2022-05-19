import React from 'react';
import {
  KeyboardAvoidingView as RNSKeyboardAvoidingView,
  TKeyboardAvoidingViewProps,
} from 'react-native-stylo';
import { TKeyboardAvoidingViewStyle } from '../themes/types';

const KeyboardAvoidingView: React.FC<
  TKeyboardAvoidingViewProps<TKeyboardAvoidingViewStyle>
> = props => <RNSKeyboardAvoidingView {...props} />;

export default KeyboardAvoidingView;
