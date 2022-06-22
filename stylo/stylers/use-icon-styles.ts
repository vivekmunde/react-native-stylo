import { TextStyle, StyleProp } from 'react-native';
import useStyles from './use-styles';

function useIconStyles<
  TStyleName extends string,
  TStyleNamespace extends string,
>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<TextStyle> {
  return useStyles<TextStyle, TStyleName, TStyleNamespace>({
    styleNamespace: styleNamespace ?? ('IconStyles' as TStyleNamespace),
    styleNames: styleNames ?? [],
  });
}

export default useIconStyles;
