import React from 'react';
import { ImageBackground, ImageBackgroundProps } from 'react-native';

import { useImageBackgroundStyles } from '../stylers';
import { TStylesProps } from './types';

export type TImageBackgroundProps<TStyleName extends string> =
  ImageBackgroundProps & TStylesProps<TStyleName>;

const RNSImageBackground = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TImageBackgroundProps<TStyleName>) => {
  const imageBackgroundStyle = useImageBackgroundStyles<TStyleName>(
    styleNames ?? [],
  );
  return <ImageBackground {...props} style={[imageBackgroundStyle, style]} />;
};

export default RNSImageBackground;
