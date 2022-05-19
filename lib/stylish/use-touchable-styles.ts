import { useTouchableStyles as rnsUseTouchableStyles } from 'react-native-stylo';
import { TViewStyle } from '../themes/types';

const useViewStyles = (
  styleNames: TViewStyle[] | undefined,
  styleNamespace?: string,
) => rnsUseTouchableStyles<TViewStyle>(styleNames, styleNamespace);

export default useViewStyles;
