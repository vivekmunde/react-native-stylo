/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */

import { useTouchableStyles as useStyloTouchableStyles } from '../../../stylo';
import { TViewStyle } from '../themes/types';

const useViewStyles = (styleNames: TViewStyle[]) =>
  useStyloTouchableStyles<TViewStyle>(styleNames);

export default useViewStyles;
