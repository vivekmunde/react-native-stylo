import { useImageBackgroundStyles as useStyloImageBackgroundStyles } from 'react-native-stylo';
import { TImageBackgroundStyle, TStyleNamespace } from '../themes/types';

const useImageBackgroundStyles = (
  styleNames: TImageBackgroundStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloImageBackgroundStyles<TImageBackgroundStyle, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );

export default useImageBackgroundStyles;
