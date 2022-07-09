/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import {
  SafeAreaView as StyloSafeAreaView,
  TSafeAreaViewProps,
} from 'react-native-stylo';
import { TSafeAreaViewStyle } from '../themes/types';

const SafeAreaView: React.FC<
  TSafeAreaViewProps<TSafeAreaViewStyle>
> = props => <StyloSafeAreaView {...props} />;

export default SafeAreaView;
