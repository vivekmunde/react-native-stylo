import { StyleProp, TextStyle } from 'react-native';

import useStyles from './use-styles';

function useTextStyles<
  TStyleName extends string,
  TStyleNamespace extends string,
>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<TextStyle> {
  return useStyles<TextStyle, TStyleName, TStyleNamespace>({
    styleNamespace: styleNamespace ?? ('TextStyles' as TStyleNamespace),
    styleNames,
  });
}

export default useTextStyles;
