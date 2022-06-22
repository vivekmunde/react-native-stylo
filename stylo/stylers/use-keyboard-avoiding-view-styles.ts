import { ViewStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

function useKeyboardAvoidingViewStyles<
  TStyleName extends string,
  TStyleNamespace extends string,
>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, TStyleName, TStyleNamespace>({
    styleNamespace:
      styleNamespace ?? ('KeyboardAvoidingViewStyles' as TStyleNamespace),
    styleNames: styleNames ?? [],
  });
}

export default useKeyboardAvoidingViewStyles;
