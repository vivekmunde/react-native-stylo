import { useTextStyles as rnsUseTextStyles } from '../../../stylo';
import { TTextStyle } from '../themes/types';

const useTextStyles = (
  styleNames: TTextStyle[] | undefined,
  styleNamespace?: string,
) => rnsUseTextStyles<TTextStyle>(styleNames, styleNamespace);

export default useTextStyles;
