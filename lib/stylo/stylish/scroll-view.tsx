import React from 'react';

import {
  ScrollView as StyloScrollSView,
  TScrollViewProps,
} from 'react-native-stylo';
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
