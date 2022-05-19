import React from 'react';
import {
  ImageBackground as RNSImageBackground,
  TImageBackgroundProps,
} from 'react-native-stylo';
import { TImageBackgroundStyle } from '../themes/types';

const ImageBackground: React.FC<TImageBackgroundProps<TImageBackgroundStyle>> =
  props => <RNSImageBackground {...props} />;

export default ImageBackground;
