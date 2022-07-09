/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import {
  ScrollView as StyloScrollSView,
  TScrollViewProps,
} from 'react-native-stylo';
import {
  TScrollViewContentContainerStyle,
  TScrollViewStyle,
} from '../themes/types';

const ScrollView: React.FC<
  TScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>
> = props => <StyloScrollSView {...props} />;

export default ScrollView;
