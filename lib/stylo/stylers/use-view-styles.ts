/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */

import { useViewStyles as useStyloViewStyles } from 'react-native-stylo';
import { TViewStyle } from '../themes/types';

const useViewStyles = (styleNames: TViewStyle[]) =>
  useStyloViewStyles<TViewStyle>(styleNames);

export default useViewStyles;
