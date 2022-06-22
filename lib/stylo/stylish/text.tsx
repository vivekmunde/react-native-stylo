import React from 'react';

import { Text as StyloText, TTextProps } from 'react-native-stylo';
import { TStyleNamespace, TTextStyle } from '../themes/types';

const Text: React.FC<TTextProps<TTextStyle, TStyleNamespace>> = props => (
  <StyloText {...props} />
);

export default Text;
