import React from 'react';

import {
  ScrollView as RNSScrollSView,
  TScrollViewProps,
} from '../../stylo';
import {
  TScrollViewContentContainerStyle,
  TScrollViewStyle,
} from '../themes/types';

const ScrollView: React.FC<
  TScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle>
> = props => <RNSScrollSView {...props} />;

export default ScrollView;
