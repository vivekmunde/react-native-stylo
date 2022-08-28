/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import { TextInput as StyloTextInput, TTextInputProps } from 'react-native-stylo';
import { TTextInputStyle } from '../themes/types';

const Text: React.FC<TTextInputProps<TTextInputStyle>> = props => (
  <StyloTextInput {...props} />
);

export default Text;
