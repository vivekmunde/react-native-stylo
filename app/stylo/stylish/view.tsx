/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import { TViewProps, View as StyloView } from '../../../stylo';
import { TViewStyle } from '../themes/types';

const View: React.FC<TViewProps<TViewStyle>> = props => (
  <StyloView {...props} />
);

export default View;
