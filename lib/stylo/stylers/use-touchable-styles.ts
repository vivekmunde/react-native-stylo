/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.0                                   */
/* -------------------------------------------------------------------------------- */

import { useTouchableStyles as useStyloTouchableStyles } from '../../../stylo';
import { TViewStyle, TStyleNamespace } from '../themes/types';

const useViewStyles = (
  styleNames: TViewStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloTouchableStyles<TViewStyle, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );

export default useViewStyles;
