import { useVariables as useStyloVariables } from 'react-native-stylo';
import { TVariables } from '../themes/types/base/variables';

const useVariables = (names: TVariables[]) =>
  useStyloVariables<TVariables>(names);

export default useVariables;
