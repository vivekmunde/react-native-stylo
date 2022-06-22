import React from 'react';
import { TextInput as RNSTextInput, TTextInputProps } from '../../../stylo';
import { TTextInputStyle } from '../themes/types';

const Text: React.FC<TTextInputProps<TTextInputStyle>> = props => (
  <RNSTextInput {...props} />
);

export default Text;
