import { useSafeAreaViewStyles as rnsUseSafeAreaViewStyles } from '../../stylo';
import { TSafeAreaViewStyle } from '../themes/types';

const useSafeAreaViewStyles = (
  styleNames: TSafeAreaViewStyle[] | undefined,
  styleNamespace?: string,
) => rnsUseSafeAreaViewStyles<TSafeAreaViewStyle>(styleNames, styleNamespace);

export default useSafeAreaViewStyles;
