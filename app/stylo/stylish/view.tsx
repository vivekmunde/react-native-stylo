/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import { TViewProps, View as StyloView } from '../../../stylo';
import { TStyleNamespace, TViewStyle } from '../themes/types';

const View: React.FC<TViewProps<TViewStyle, TStyleNamespace>> = props => (
  <StyloView {...props} />
);

export default View;
