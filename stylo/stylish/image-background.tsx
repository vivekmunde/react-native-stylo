import React from 'react';
import { ImageBackground, ImageBackgroundProps } from 'react-native';

import { useImageBackgroundStyles } from '../stylers';
import { TStylesProps } from './types';

export type TImageBackgroundProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = ImageBackgroundProps & TStylesProps<TStyleName, TStyleNamespace>;

const RNSImageBackground = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TImageBackgroundProps<TStyleName, TStyleNamespace>) => {
  const imageBackgroundStyle = useImageBackgroundStyles<
    TStyleName,
    TStyleNamespace
  >(
    styleNames ?? [],
    styleNamespace ?? ('ImageBackgroundStyles' as TStyleNamespace),
  );
  return <ImageBackground {...props} style={[imageBackgroundStyle, style]} />;
};

export default RNSImageBackground;
