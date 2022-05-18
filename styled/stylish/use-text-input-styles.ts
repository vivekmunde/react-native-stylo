import { useTextInputStyles as rnsUseTextInputStyles } from '../../stylo';
import { TTextInputStyle } from '../themes/types';

const useTextInputStyles = (
  styleNames: TTextInputStyle[] | undefined,
  styleNamespace?: string,
) => rnsUseTextInputStyles<TTextInputStyle>(styleNames, styleNamespace);

export default useTextInputStyles;
