import { ViewStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

export function useScrollViewStyles<T extends string>(
  styleNames: T[] | undefined,
  styleNamespace?: string,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'ScrollViewStyles',
    styleNames,
  });
}

export function useScrollViewContentContainerStyles<T extends string>(
  styleNames: T[] | undefined,
  styleNamespace?: string,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'ScrollViewContentContainerStyles',
    styleNames,
  });
}
