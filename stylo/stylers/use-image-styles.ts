import { ImageStyle, StyleProp } from 'react-native';

import useStyles from './use-styles';

function useImageStyles<TStyleName extends string>(
  styleNames: TStyleName[],
): StyleProp<ImageStyle> {
  return useStyles<ImageStyle, TStyleName>({
    styleNamespace: 'ImageStyles',
    styleNames: styleNames ?? [],
  });
}

export default useImageStyles;
