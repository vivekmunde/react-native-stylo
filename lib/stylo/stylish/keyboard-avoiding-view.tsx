import React from 'react';

import {
  KeyboardAvoidingView as StyloKeyboardAvoidingView,
  TKeyboardAvoidingViewProps,
} from 'react-native-stylo';
import { TKeyboardAvoidingViewStyle, TStyleNamespace } from '../themes/types';

const KeyboardAvoidingView: React.FC<
  TKeyboardAvoidingViewProps<TKeyboardAvoidingViewStyle, TStyleNamespace>
> = props => <StyloKeyboardAvoidingView {...props} />;

export default KeyboardAvoidingView;
