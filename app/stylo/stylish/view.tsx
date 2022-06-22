import React from 'react';
import { View as RNSView, TViewProps } from '../../../stylo';
import { TViewStyle } from '../themes/types';

const View: React.FC<TViewProps<TViewStyle>> = props => <RNSView {...props} />;

export default View;
