import React from 'react';
import { Image, ImageProps } from 'react-native';

import { useImageStyles } from '../stylers';
import { TStylesProps } from './types';

export type TImageProps<TStyleName extends string> = ImageProps &
  TStylesProps<TStyleName>;

const RNSImage = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TImageProps<TStyleName>) => {
  const imageStyle = useImageStyles<TStyleName>(styleNames ?? []);
  return <Image {...props} style={[imageStyle, style]} />;
};

export default RNSImage;
