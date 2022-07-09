import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import useImageBackgroundViewStyles from './use-image-background-styles';

type TProps<TStyleName extends string> = {
  styleNames: TStyleName[];
  children: (style: StyleProp<ViewStyle>) => React.ReactElement | null;
};

const ImageBackgroundViewStyles = <TStyleName extends string>({
  styleNames,
  children,
}: TProps<TStyleName>): React.ReactElement | null => {
  const style = useImageBackgroundViewStyles<TStyleName>(styleNames);
  return children(style);
};

export default ImageBackgroundViewStyles;
