/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import { useIconStyles as useStyloIconStyles } from '../../../stylo';
import { TIconStyle, TStyleNamespace } from '../themes/types';

const useIconStyles = (
  styleNames: TIconStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloIconStyles<TIconStyle, TStyleNamespace>(styleNames, styleNamespace);

export default useIconStyles;
