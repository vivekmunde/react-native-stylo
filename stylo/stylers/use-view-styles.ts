import { ViewStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

function useViewStyles<T extends string>(
  styleNames: T[] | undefined,
  styleNamespace?: string,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'ViewStyles',
    styleNames,
  });
}

export default useViewStyles;
