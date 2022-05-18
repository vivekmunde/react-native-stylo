import React from 'react';
import { ImageBackground, ImageBackgroundProps } from 'react-native';
import { TStylesProps, useImageBackgroundStyles } from '../stylers';

export type TImageBackgroundProps<T extends string> = ImageBackgroundProps &
  TStylesProps<T>;

const RNSImageBackground = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TImageBackgroundProps<T>) => {
  const imageBackgroundStyle = useImageBackgroundStyles<T>(
    styleNames,
    styleNamespace ?? 'ImageBackgroundStyles',
  );
  return <ImageBackground {...props} style={[imageBackgroundStyle, style]} />;
};

export default RNSImageBackground;
