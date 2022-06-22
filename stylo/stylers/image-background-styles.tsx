import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import useImageBackgroundViewStyles from './use-image-background-styles';

type TProps<TStyleName extends string, TStyleNamespace extends string> = {
  styleNamespace?: TStyleNamespace;
  styleNames: TStyleName[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

const ImageBackgroundViewStyles = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  children,
}: TProps<TStyleName, TStyleNamespace>): React.ReactElement | null => {
  const style = useImageBackgroundViewStyles<TStyleName, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );
  return children(style);
};

export default ImageBackgroundViewStyles;
