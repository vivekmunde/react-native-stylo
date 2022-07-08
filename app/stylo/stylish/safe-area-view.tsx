/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import {
  SafeAreaView as StyloSafeAreaView,
  TSafeAreaViewProps,
} from '../../../stylo';
import { TSafeAreaViewStyle, TStyleNamespace } from '../themes/types';

const SafeAreaView: React.FC<
  TSafeAreaViewProps<TSafeAreaViewStyle, TStyleNamespace>
> = props => <StyloSafeAreaView {...props} />;

export default SafeAreaView;
