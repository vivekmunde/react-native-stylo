/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */

import { useIconStyles as useStyloIconStyles } from 'react-native-stylo';
import { TIconStyle } from '../themes/types';

const useIconStyles = (styleNames: TIconStyle[]) =>
  useStyloIconStyles<TIconStyle>(styleNames);

export default useIconStyles;
