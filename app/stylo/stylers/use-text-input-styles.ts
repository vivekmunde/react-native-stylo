/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */

import { useTextInputStyles as useStyloTextInputStyles } from '../../../stylo';
import { TTextInputStyle } from '../themes/types';

const useTextInputStyles = (styleNames: TTextInputStyle[]) =>
  useStyloTextInputStyles<TTextInputStyle>(styleNames);

export default useTextInputStyles;
