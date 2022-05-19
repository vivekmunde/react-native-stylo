import React from 'react';
import { Image as RNSImage, TImageProps } from 'react-native-stylo';
import { TImageStyle } from '../themes/types';

const Image: React.FC<TImageProps<TImageStyle>> = props => (
  <RNSImage {...props} />
);

export default Image;
