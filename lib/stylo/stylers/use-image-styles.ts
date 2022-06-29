/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.3.0                                   */
/* -------------------------------------------------------------------------------- */

import { useImageStyles as useStyloImageStyles } from 'react-native-stylo';
import { TImageStyle, TStyleNamespace } from '../themes/types';

const useImageStyles = (
  styleNames: TImageStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloImageStyles<TImageStyle, TStyleNamespace>(styleNames, styleNamespace);

export default useImageStyles;
