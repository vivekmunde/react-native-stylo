import React from 'react';
import { StyleProp, ImageStyle } from 'react-native';
import useImageStyles from './use-image-styles';

type TProps<T extends string> = {
  styleNamespace?: string;
  styleNames?: T[];
  children: (style: StyleProp<ImageStyle>) => React.ReactElement | null;
};

const ImageStyles = <T extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<T>): React.ReactElement | null => {
  const style = useImageStyles<T>(styleNames, styleNamespace);
  return children(style);
};

export default ImageStyles;
