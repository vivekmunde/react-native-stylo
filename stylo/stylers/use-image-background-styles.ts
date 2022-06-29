import { StyleProp, ViewStyle } from 'react-native';

import useStyles from './use-styles';

function useImageBackgroundStyles<
  TStyleName extends string,
  TStyleNamespace extends string,
>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, TStyleName, TStyleNamespace>({
    styleNamespace:
      styleNamespace ?? ('ImageBackgroundStyles' as TStyleNamespace),
    styleNames: styleNames ?? [],
  });
}

export default useImageBackgroundStyles;
