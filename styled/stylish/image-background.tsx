import React from 'react';
import {
  ImageBackground as RNSImageBackground,
  TImageBackgroundProps,
} from '../../stylo';
import { TImageBackgroundStyle } from '../themes/types';

const ImageBackground: React.FC<TImageBackgroundProps<TImageBackgroundStyle>> =
  props => <RNSImageBackground {...props} />;

export default ImageBackground;
