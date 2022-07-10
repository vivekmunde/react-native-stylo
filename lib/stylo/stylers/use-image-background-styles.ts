/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */

import { useImageBackgroundStyles as useStyloImageBackgroundStyles } from 'react-native-stylo';
import { TImageBackgroundStyle } from '../themes/types';

const useImageBackgroundStyles = (styleNames: TImageBackgroundStyle[]) =>
  useStyloImageBackgroundStyles<TImageBackgroundStyle>(styleNames);

export default useImageBackgroundStyles;
