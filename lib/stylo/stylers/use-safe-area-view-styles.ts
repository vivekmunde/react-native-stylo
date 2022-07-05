/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.0                                   */
/* -------------------------------------------------------------------------------- */

import { useSafeAreaViewStyles as useStyloSafeAreaViewStyles } from 'react-native-stylo';
import { TSafeAreaViewStyle, TStyleNamespace } from '../themes/types';

const useSafeAreaViewStyles = (
  styleNames: TSafeAreaViewStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloSafeAreaViewStyles<TSafeAreaViewStyle, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );

export default useSafeAreaViewStyles;
