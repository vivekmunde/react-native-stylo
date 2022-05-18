import { useKeyboardAvoidingViewStyles as rnsUseKeyboardAvoidingViewStyles } from '../../stylo';
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
