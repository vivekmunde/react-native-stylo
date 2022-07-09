/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import { Text as StyloText, TTextProps } from '../../../stylo';
import { TTextStyle } from '../themes/types';

const Text: React.FC<TTextProps<TTextStyle>> = props => (
  <StyloText {...props} />
);

export default Text;
