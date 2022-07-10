/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */

import { useTextStyles as useStyloTextStyles } from 'react-native-stylo';
import { TTextStyle } from '../themes/types';

const useTextStyles = (styleNames: TTextStyle[]) =>
  useStyloTextStyles<TTextStyle>(styleNames);

export default useTextStyles;
