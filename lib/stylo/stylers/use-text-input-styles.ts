import { useTextInputStyles as useStyloTextInputStyles } from 'react-native-stylo';
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
