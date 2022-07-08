/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import { Image as StyloImage, TImageProps } from '../../../stylo';
import { TImageStyle, TStyleNamespace } from '../themes/types';

const Image: React.FC<TImageProps<TImageStyle, TStyleNamespace>> = props => (
  <StyloImage {...props} />
);

export default Image;
