/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import { useImageStyles as useStyloImageStyles } from '../../../stylo';
import { TImageStyle } from '../themes/types';

const useImageStyles = (styleNames: TImageStyle[]) =>
  useStyloImageStyles<TImageStyle>(styleNames);

export default useImageStyles;
