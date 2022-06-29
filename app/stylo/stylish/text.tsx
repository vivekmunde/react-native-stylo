/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.3.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import { Text as StyloText, TTextProps } from '../../../stylo';
import { TStyleNamespace, TTextStyle } from '../themes/types';

const Text: React.FC<TTextProps<TTextStyle, TStyleNamespace>> = props => (
  <StyloText {...props} />
);

export default Text;
