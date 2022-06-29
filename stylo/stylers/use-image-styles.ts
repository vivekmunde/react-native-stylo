import { ImageStyle, StyleProp } from 'react-native';

import useStyles from './use-styles';

function useImageStyles<
  TStyleName extends string,
  TStyleNamespace extends string,
>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ImageStyle> {
  return useStyles<ImageStyle, TStyleName, TStyleNamespace>({
    styleNamespace: styleNamespace ?? ('ImageStyles' as TStyleNamespace),
    styleNames: styleNames ?? [],
  });
}

export default useImageStyles;
