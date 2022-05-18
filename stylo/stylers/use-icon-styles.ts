import { TextStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

function useIconStyles<T extends string>(
  styleNames: T[] | undefined,
  styleNamespace?: string,
): StyleProp<TextStyle> {
  return useStyles<TextStyle, T>({
    styleNamespace: styleNamespace ?? 'IconStyles',
    styleNames,
  });
}

export default useIconStyles;
