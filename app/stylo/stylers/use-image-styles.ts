import { useImageStyles as useStyloImageStyles } from '../../../stylo';
import { TImageStyle, TStyleNamespace } from '../themes/types';

const useImageStyles = (
  styleNames: TImageStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloImageStyles<TImageStyle, TStyleNamespace>(styleNames, styleNamespace);

export default useImageStyles;
