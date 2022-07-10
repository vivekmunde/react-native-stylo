/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import {
  ImageBackground as StyloImageBackground,
  TImageBackgroundProps,
} from 'react-native-stylo';
import { TImageBackgroundStyle } from '../themes/types';

const ImageBackground: React.FC<
  TImageBackgroundProps<TImageBackgroundStyle>
> = props => <StyloImageBackground {...props} />;

export default ImageBackground;
