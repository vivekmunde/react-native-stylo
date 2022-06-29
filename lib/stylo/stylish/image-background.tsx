/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.3.0                                   */
/* -------------------------------------------------------------------------------- */

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
