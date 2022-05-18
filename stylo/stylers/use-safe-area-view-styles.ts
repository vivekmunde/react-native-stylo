import { ViewStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

function useSafeAreaViewStyles<T extends string>(
  styleNames: T[] | undefined,
  styleNamespace?: string,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'SafeAreaViewStyles',
    styleNames,
  });
}

export default useSafeAreaViewStyles;
