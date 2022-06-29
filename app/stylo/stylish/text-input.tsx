/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.3.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import { TextInput as StyloTextInput, TTextInputProps } from '../../../stylo';
import { TStyleNamespace, TTextInputStyle } from '../themes/types';

const Text: React.FC<
  TTextInputProps<TTextInputStyle, TStyleNamespace>
> = props => <StyloTextInput {...props} />;

export default Text;
