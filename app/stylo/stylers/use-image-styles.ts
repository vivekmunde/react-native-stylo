/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */

import { useImageStyles as useStyloImageStyles } from '../../../stylo';
import { TImageStyle } from '../themes/types';

const useImageStyles = (styleNames: TImageStyle[]) =>
  useStyloImageStyles<TImageStyle>(styleNames);

export default useImageStyles;
