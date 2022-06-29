import React from 'react';

import { TextInput as StyloTextInput, TTextInputProps } from 'react-native-stylo';
import { TStyleNamespace, TTextInputStyle } from '../themes/types';

const Text: React.FC<
  TTextInputProps<TTextInputStyle, TStyleNamespace>
> = props => <StyloTextInput {...props} />;

export default Text;
