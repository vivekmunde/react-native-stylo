import { useIconStyles as useStyloIconStyles } from 'react-native-stylo';
import { TIconStyle, TStyleNamespace } from '../themes/types';

const useIconStyles = (
  styleNames: TIconStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloIconStyles<TIconStyle, TStyleNamespace>(styleNames, styleNamespace);

export default useIconStyles;
