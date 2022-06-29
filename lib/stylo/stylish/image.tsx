import React from 'react';

import { Image as StyloImage, TImageProps } from 'react-native-stylo';
import { TImageStyle, TStyleNamespace } from '../themes/types';

const Image: React.FC<TImageProps<TImageStyle, TStyleNamespace>> = props => (
  <StyloImage {...props} />
);

export default Image;
