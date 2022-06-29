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
