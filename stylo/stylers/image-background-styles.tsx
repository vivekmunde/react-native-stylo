import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import useImageBackgroundViewStyles from './use-image-background-styles';

type TProps<T extends string> = {
  styleNamespace?: string;
  styleNames?: T[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

const ImageBackgroundViewStyles = <T extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<T>): React.ReactElement | null => {
  const style = useImageBackgroundViewStyles<T>(styleNames, styleNamespace);
  return children(style);
};

export default ImageBackgroundViewStyles;
