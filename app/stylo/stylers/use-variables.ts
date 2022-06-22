import { useVariables as useStyloVariables } from '../../../stylo';
import { TVariables } from '../themes/types/base/variables';

const useVariables = (names: TVariables[]) =>
  useStyloVariables<TVariables>(names);

export default useVariables;
