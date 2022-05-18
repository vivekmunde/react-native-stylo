import React from 'react';
import { Image, ImageProps } from 'react-native';
import { TStylesProps, useImageStyles } from '../stylers';

export type TImageProps<T extends string> = ImageProps & TStylesProps<T>;

const RNSImage = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TImageProps<T>) => {
  const imageStyle = useImageStyles<T>(
    styleNames,
    styleNamespace ?? 'ImageStyles',
  );
  return <Image {...props} style={[imageStyle, style]} />;
};

export default RNSImage;
