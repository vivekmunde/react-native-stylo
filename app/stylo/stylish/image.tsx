/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import { Image as StyloImage, TImageProps } from '../../../stylo';
import { TImageStyle } from '../themes/types';

const Image: React.FC<TImageProps<TImageStyle>> = props => (
  <StyloImage {...props} />
);

export default Image;
