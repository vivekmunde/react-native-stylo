/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import {
  SafeAreaView as StyloSafeAreaView,
  TSafeAreaViewProps,
} from '../../../stylo';
import { TSafeAreaViewStyle } from '../themes/types';

const SafeAreaView: React.FC<
  TSafeAreaViewProps<TSafeAreaViewStyle>
> = props => <StyloSafeAreaView {...props} />;

export default SafeAreaView;
