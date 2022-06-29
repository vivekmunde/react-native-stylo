import React from 'react';

import {
  SafeAreaView as StyloSafeAreaView,
  TSafeAreaViewProps,
} from 'react-native-stylo';
import { TSafeAreaViewStyle, TStyleNamespace } from '../themes/types';

const SafeAreaView: React.FC<
  TSafeAreaViewProps<TSafeAreaViewStyle, TStyleNamespace>
> = props => <StyloSafeAreaView {...props} />;

export default SafeAreaView;
