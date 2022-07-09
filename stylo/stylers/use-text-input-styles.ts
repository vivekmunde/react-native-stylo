import { StyleProp, TextStyle } from 'react-native';

import useStyles from './use-styles';

function useImageStyles<TStyleName extends string>(
  styleNames: TStyleName[],
): StyleProp<TextStyle> {
  return useStyles<TextStyle, TStyleName>({
    styleNamespace: 'TextInputStyles',
    styleNames: styleNames ?? [],
  });
}

export default useImageStyles;
