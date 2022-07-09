/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */

import { useVariables as useStyloVariables } from 'react-native-stylo';
import { TVariable } from '../themes/types';

const useVariables = (names: TVariable[]) =>
  useStyloVariables<TVariable>(names);

export default useVariables;
