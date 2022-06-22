import { useVariables as rnsUseVariables } from '../../../stylo';
import { TVariables } from '../themes/types/base/variables';

const useVariables = (names: TVariables[]) =>
  rnsUseVariables<TVariables>(names);

export default useVariables;
