/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.3.0                                   */
/* -------------------------------------------------------------------------------- */

import { useTextInputStyles as useStyloTextInputStyles } from 'react-native-stylo';
import { TTextInputStyle, TStyleNamespace } from '../themes/types';

const useTextInputStyles = (
  styleNames: TTextInputStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloTextInputStyles<TTextInputStyle, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );

export default useTextInputStyles;
