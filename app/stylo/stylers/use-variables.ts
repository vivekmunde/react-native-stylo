import { useVariables as useStyloVariables } from '../../../stylo';
import { TVariable } from '../themes/types/variables';

const useVariables = (names: TVariable[]) =>
  useStyloVariables<TVariable>(names);

export default useVariables;
