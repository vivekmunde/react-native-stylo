import { useKeyboardAvoidingViewStyles as useStyloKeyboardAvoidingViewStyles } from '../../../stylo';
import { TKeyboardAvoidingViewStyle, TStyleNamespace } from '../themes/types';

const useKeyboardAvoidingViewStyles = (
  styleNames: TKeyboardAvoidingViewStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloKeyboardAvoidingViewStyles<
    TKeyboardAvoidingViewStyle,
    TStyleNamespace
  >(styleNames, styleNamespace);

export default useKeyboardAvoidingViewStyles;
