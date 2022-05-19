import { useViewStyles as rnsUseViewStyles } from 'react-native-stylo';
import { TViewStyle } from '../themes/types';

const useViewStyles = (
  styleNames: TViewStyle[] | undefined,
  styleNamespace?: string,
) => rnsUseViewStyles<TViewStyle>(styleNames, styleNamespace);

export default useViewStyles;
