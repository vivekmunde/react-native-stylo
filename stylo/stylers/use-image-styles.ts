import { ImageStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

function useImageStyles<T extends string>(
  styleNames: T[] | undefined,
  styleNamespace?: string,
): StyleProp<ImageStyle> {
  return useStyles<ImageStyle, T>({
    styleNamespace: styleNamespace ?? 'ImageStyles',
    styleNames,
  });
}

export default useImageStyles;
