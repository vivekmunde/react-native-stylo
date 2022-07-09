import { StyleProp, TextStyle } from 'react-native';

import useStyles from './use-styles';

function useTextStyles<TStyleName extends string>(
  styleNames: TStyleName[],
): StyleProp<TextStyle> {
  return useStyles<TextStyle, TStyleName>({
    styleNamespace: 'TextStyles',
    styleNames,
  });
}

export default useTextStyles;
