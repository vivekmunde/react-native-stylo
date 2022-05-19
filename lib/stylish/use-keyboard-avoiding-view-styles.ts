import { useKeyboardAvoidingViewStyles as rnsUseKeyboardAvoidingViewStyles } from 'react-native-stylo';
import { TKeyboardAvoidingViewStyle } from '../themes/types';

const useKeyboardAvoidingViewStyles = (
  styleNames: TKeyboardAvoidingViewStyle[] | undefined,
  styleNamespace?: string,
) =>
  rnsUseKeyboardAvoidingViewStyles<TKeyboardAvoidingViewStyle>(
    styleNames,
    styleNamespace,
  );

export default useKeyboardAvoidingViewStyles;
