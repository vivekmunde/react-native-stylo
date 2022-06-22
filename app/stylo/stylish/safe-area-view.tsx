import React from 'react';
import {
  SafeAreaView as RNSSafeAreaView,
  TSafeAreaViewProps,
} from '../../../stylo';
import { TSafeAreaViewStyle } from '../themes/types';

const SafeAreaView: React.FC<TSafeAreaViewProps<TSafeAreaViewStyle>> =
  props => <RNSSafeAreaView {...props} />;

export default SafeAreaView;
