import { useViewStyles as useStyloViewStyles } from '../../../stylo';
import { TViewStyle, TStyleNamespace } from '../themes/types';

const useViewStyles = (
  styleNames: TViewStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloViewStyles<TViewStyle, TStyleNamespace>(styleNames, styleNamespace);

export default useViewStyles;
