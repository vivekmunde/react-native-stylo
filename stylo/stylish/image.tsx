import React from 'react';
import { Image, ImageProps } from 'react-native';

import { useImageStyles } from '../stylers';
import { TStylesProps } from './types';

export type TImageProps<
  TStyleName extends string,
  TStyleNamespace extends string,
> = ImageProps & TStylesProps<TStyleName, TStyleNamespace>;

const RNSImage = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TImageProps<TStyleName, TStyleNamespace>) => {
  const imageStyle = useImageStyles<TStyleName, TStyleNamespace>(
    styleNames ?? [],
    styleNamespace ?? ('ImageStyles' as TStyleNamespace),
  );
  return <Image {...props} style={[imageStyle, style]} />;
};

export default RNSImage;
