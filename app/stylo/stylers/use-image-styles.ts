import { useImageStyles as rnsUseImageStyles } from '../../../stylo';
import { TImageStyle } from '../themes/types';

const useImageStyles = (
  styleNames: TImageStyle[] | undefined,
  styleNamespace?: string,
) => rnsUseImageStyles<TImageStyle>(styleNames, styleNamespace);

export default useImageStyles;
