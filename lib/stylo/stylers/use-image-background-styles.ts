/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.3.0                                   */
/* -------------------------------------------------------------------------------- */

import { useImageBackgroundStyles as useStyloImageBackgroundStyles } from 'react-native-stylo';
import { TImageBackgroundStyle, TStyleNamespace } from '../themes/types';

const useImageBackgroundStyles = (
  styleNames: TImageBackgroundStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloImageBackgroundStyles<TImageBackgroundStyle, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );

export default useImageBackgroundStyles;
