import { useImageBackgroundStyles as rnsUseImageBackgroundStyles } from 'react-native-stylo';
import { TImageBackgroundStyle } from '../themes/types';

const useImageBackgroundStyles = (
  styleNames: TImageBackgroundStyle[] | undefined,
  styleNamespace?: string,
) =>
  rnsUseImageBackgroundStyles<TImageBackgroundStyle>(
    styleNames,
    styleNamespace,
  );

export default useImageBackgroundStyles;
