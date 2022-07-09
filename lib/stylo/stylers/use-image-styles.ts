/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */

import { useImageStyles as useStyloImageStyles } from 'react-native-stylo';
import { TImageStyle } from '../themes/types';

const useImageStyles = (styleNames: TImageStyle[]) =>
  useStyloImageStyles<TImageStyle>(styleNames);

export default useImageStyles;
