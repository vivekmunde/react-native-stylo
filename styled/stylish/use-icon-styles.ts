import { useIconStyles as rnsUseIconStyles } from '../../stylo';
import { TIconStyle } from '../themes/types';

const useIconStyles = (
  styleNames: TIconStyle[] | undefined,
  styleNamespace?: string,
) => rnsUseIconStyles<TIconStyle>(styleNames, styleNamespace);

export default useIconStyles;
