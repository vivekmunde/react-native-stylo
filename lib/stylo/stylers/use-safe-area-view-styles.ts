/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */

import { useSafeAreaViewStyles as useStyloSafeAreaViewStyles } from 'react-native-stylo';
import { TSafeAreaViewStyle } from '../themes/types';

const useSafeAreaViewStyles = (styleNames: TSafeAreaViewStyle[]) =>
  useStyloSafeAreaViewStyles<TSafeAreaViewStyle>(styleNames);

export default useSafeAreaViewStyles;
