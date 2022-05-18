import { ViewStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

function useTouchableStyles<T extends string>(
  styleNames: T[] | undefined,
  styleNamespace?: string,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'TouchableStyles',
    styleNames,
  });
}

export default useTouchableStyles;
