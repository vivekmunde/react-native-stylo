import { StyleProp, ViewStyle } from 'react-native';

import useStyles from './use-styles';

function useSafeAreaViewStyles<TStyleName extends string>(
  styleNames: TStyleName[],
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, TStyleName>({
    styleNamespace: 'SafeAreaViewStyles',
    styleNames: styleNames ?? [],
  });
}

export default useSafeAreaViewStyles;
