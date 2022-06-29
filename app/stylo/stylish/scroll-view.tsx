/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.3.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import {
  ScrollView as StyloScrollSView,
  TScrollViewProps,
} from '../../../stylo';
import {
  TScrollViewContentContainerStyle,
  TScrollViewStyle,
  TStyleNamespace,
} from '../themes/types';

const ScrollView: React.FC<
  TScrollViewProps<
    TScrollViewStyle,
    TStyleNamespace,
    TScrollViewContentContainerStyle,
    TStyleNamespace
  >
> = props => <StyloScrollSView {...props} />;

export default ScrollView;
