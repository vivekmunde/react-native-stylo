import { useTextStyles as useStyloTextStyles } from 'react-native-stylo';
import { TTextStyle, TStyleNamespace } from '../themes/types';

const useTextStyles = (
  styleNames: TTextStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloTextStyles<TTextStyle, TStyleNamespace>(styleNames, styleNamespace);

export default useTextStyles;
