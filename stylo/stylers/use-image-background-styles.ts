import { ViewStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

function useImageBackgroundStyles<T extends string>(
  styleNames: T[] | undefined,
  styleNamespace?: string,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'ImageBackgroundStyles',
    styleNames,
  });
}

export default useImageBackgroundStyles;
