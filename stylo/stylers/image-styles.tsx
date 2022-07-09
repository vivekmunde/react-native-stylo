import React from 'react';
import { ImageStyle, StyleProp } from 'react-native';

import useImageStyles from './use-image-styles';

type TProps<TStyleName extends string> = {
  styleNames: TStyleName[];
  children: (style: StyleProp<ImageStyle>) => React.ReactElement | null;
};

const ImageStyles = <TStyleName extends string>({
  styleNames,
  children,
}: TProps<TStyleName>): React.ReactElement | null => {
  const style = useImageStyles<TStyleName>(styleNames);
  return children(style);
};

export default ImageStyles;
