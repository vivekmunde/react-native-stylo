import { useVariables as useStyloVariables } from 'react-native-stylo';
import { TVariable } from '../themes/types';

const useVariables = (names: TVariable[]) =>
  useStyloVariables<TVariable>(names);

export default useVariables;
