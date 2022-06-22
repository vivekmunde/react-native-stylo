import { useTextStyles as useStyloTextStyles } from '../../../stylo';
import { TTextStyle, TStyleNamespace } from '../themes/types';

const useTextStyles = (
  styleNames: TTextStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloTextStyles<TTextStyle, TStyleNamespace>(styleNames, styleNamespace);

export default useTextStyles;
