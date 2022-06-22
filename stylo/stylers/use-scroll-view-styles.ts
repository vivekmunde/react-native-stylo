import { StyleProp, ViewStyle } from 'react-native';

import useStyles from './use-styles';

export function useScrollViewStyles<
  TStyleName extends string,
  TStyleNamespace extends string,
>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, TStyleName, TStyleNamespace>({
    styleNamespace: styleNamespace ?? ('ScrollViewStyles' as TStyleNamespace),
    styleNames: styleNames ?? [],
  });
}

export function useScrollViewContentContainerStyles<
  TStyleName extends string,
  TStyleNamespace extends string,
>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, TStyleName, TStyleNamespace>({
    styleNamespace:
      styleNamespace ?? ('ScrollViewContentContainerStyles' as TStyleNamespace),
    styleNames: styleNames ?? [],
  });
}
