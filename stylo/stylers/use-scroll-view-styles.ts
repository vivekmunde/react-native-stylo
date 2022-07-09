import { StyleProp, ViewStyle } from 'react-native';

import useStyles from './use-styles';

export function useScrollViewStyles<TStyleName extends string>(
  styleNames: TStyleName[],
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, TStyleName>({
    styleNamespace: 'ScrollViewStyles',
    styleNames: styleNames ?? [],
  });
}

export function useScrollViewContentContainerStyles<TStyleName extends string>(
  styleNames: TStyleName[],
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, TStyleName>({
    styleNamespace: 'ScrollViewContentContainerStyles',
    styleNames: styleNames ?? [],
  });
}
