import { StyleProp, TextStyle } from 'react-native';

import useStyles from './use-styles';

function useImageStyles<
  TStyleName extends string,
  TStyleNamespace extends string,
>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<TextStyle> {
  return useStyles<TextStyle, TStyleName, TStyleNamespace>({
    styleNamespace: styleNamespace ?? ('TextInputStyles' as TStyleNamespace),
    styleNames: styleNames ?? [],
  });
}

export default useImageStyles;
