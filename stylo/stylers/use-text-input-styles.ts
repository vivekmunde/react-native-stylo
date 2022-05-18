import { TextStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

function useImageStyles<T extends string>(
  styleNames: T[] | undefined,
  styleNamespace?: string,
): StyleProp<TextStyle> {
  return useStyles<TextStyle, T>({
    styleNamespace: styleNamespace ?? 'TextInputStyles',
    styleNames,
  });
}

export default useImageStyles;
