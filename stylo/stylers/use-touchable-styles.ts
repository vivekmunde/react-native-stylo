import { StyleProp, ViewStyle } from 'react-native';

import useStyles from './use-styles';

function useTouchableStyles<TStyleName extends string>(
  styleNames: TStyleName[],
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, TStyleName>({
    styleNamespace: 'TouchableStyles',
    styleNames: styleNames ?? [],
  });
}

export default useTouchableStyles;
