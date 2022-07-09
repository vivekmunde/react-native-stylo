/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import { useVariables as useStyloVariables } from '../../../stylo';
import { TVariable } from '../themes/types';

const useVariables = (names: TVariable[]) =>
  useStyloVariables<TVariable>(names);

export default useVariables;
