import React from 'react';

import { Image as StyloImage, TImageProps } from '../../../stylo';
import { TImageStyle, TStyleNamespace } from '../themes/types';

const Image: React.FC<TImageProps<TImageStyle, TStyleNamespace>> = props => (
  <StyloImage {...props} />
);

export default Image;
