import { StyleProp, ViewStyle } from 'react-native';

import useStyles from './use-styles';

function useViewStyles<TStyleName extends string>(
  styleNames: TStyleName[],
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, TStyleName>({
    styleNamespace: 'ViewStyles',
    styleNames: styleNames ?? [],
  });
}

export default useViewStyles;
