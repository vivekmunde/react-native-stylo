import { useTextInputStyles as useStyloTextInputStyles } from '../../../stylo';
import { TTextInputStyle, TStyleNamespace } from '../themes/types';

const useTextInputStyles = (
  styleNames: TTextInputStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloTextInputStyles<TTextInputStyle, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );

export default useTextInputStyles;
