import { TextStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

function useTextStyles<T extends string>(
  styleNames: T[] | undefined,
  styleNamespace?: string,
): StyleProp<TextStyle> {
  return useStyles<TextStyle, T>({
    styleNamespace: styleNamespace ?? 'TextStyles',
    styleNames,
  });
}

export default useTextStyles;
