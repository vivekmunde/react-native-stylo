import React from 'react';
import {
  KeyboardAvoidingView as RNSKeyboardAvoidingView,
  TKeyboardAvoidingViewProps,
} from '../../stylo';
import { TKeyboardAvoidingViewStyle } from '../themes/types';

const KeyboardAvoidingView: React.FC<
  TKeyboardAvoidingViewProps<TKeyboardAvoidingViewStyle>
> = props => <RNSKeyboardAvoidingView {...props} />;

export default KeyboardAvoidingView;