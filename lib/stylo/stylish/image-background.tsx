import React from 'react';

import {
  ImageBackground as StyloImageBackground,
  TImageBackgroundProps,
} from 'react-native-stylo';
import { TImageBackgroundStyle, TStyleNamespace } from '../themes/types';

const ImageBackground: React.FC<
  TImageBackgroundProps<TImageBackgroundStyle, TStyleNamespace>
> = props => <StyloImageBackground {...props} />;

export default ImageBackground;
