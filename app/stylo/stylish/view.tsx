import React from 'react';

import { TViewProps, View as StyloView } from '../../../stylo';
import { TStyleNamespace, TViewStyle } from '../themes/types';

const View: React.FC<TViewProps<TViewStyle, TStyleNamespace>> = props => (
  <StyloView {...props} />
);

export default View;
