import { StyleProp, TextStyle } from 'react-native';

import useStyles from './use-styles';

function useIconStyles<TStyleName extends string>(
  styleNames: TStyleName[],
): StyleProp<TextStyle> {
  return useStyles<TextStyle, TStyleName>({
    styleNamespace: 'IconStyles',
    styleNames: styleNames ?? [],
  });
}

export default useIconStyles;
