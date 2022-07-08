/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import { useTextStyles as useStyloTextStyles } from '../../../stylo';
import { TTextStyle, TStyleNamespace } from '../themes/types';

const useTextStyles = (
  styleNames: TTextStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloTextStyles<TTextStyle, TStyleNamespace>(styleNames, styleNamespace);

export default useTextStyles;
