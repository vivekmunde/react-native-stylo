import { StyleProp, ViewStyle } from 'react-native';

import useStyles from './use-styles';

function useImageBackgroundStyles<TStyleName extends string>(
  styleNames: TStyleName[],
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, TStyleName>({
    styleNamespace: 'ImageBackgroundStyles',
    styleNames: styleNames ?? [],
  });
}

export default useImageBackgroundStyles;
