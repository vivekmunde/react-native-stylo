/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import { useViewStyles as useStyloViewStyles } from '../../../stylo';
import { TViewStyle } from '../themes/types';

const useViewStyles = (styleNames: TViewStyle[]) =>
  useStyloViewStyles<TViewStyle>(styleNames);

export default useViewStyles;
