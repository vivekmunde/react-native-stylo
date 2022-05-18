import { ViewStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

function useKeyboardAvoidingViewStyles<T extends string>(
  styleNames: T[] | undefined,
  styleNamespace?: string,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'KeyboardAvoidingViewStyles',
    styleNames,
  });
}

export default useKeyboardAvoidingViewStyles;
