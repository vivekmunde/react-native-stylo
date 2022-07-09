/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import { useTextStyles as useStyloTextStyles } from '../../../stylo';
import { TTextStyle } from '../themes/types';

const useTextStyles = (styleNames: TTextStyle[]) =>
  useStyloTextStyles<TTextStyle>(styleNames);

export default useTextStyles;
