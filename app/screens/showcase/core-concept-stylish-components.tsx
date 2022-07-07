import React from 'react';

import { Image, SafeAreaView, Text, View } from '../../../stylo';
import {
  TImageStyle,
  TSafeAreaViewStyle,
  TStyleNamespace,
  TTextStyle,
  TViewStyle,
} from '../../stylo/themes/types';

const data = [
  {
    name: 'Narayan Naresh Nathani',
    profileUrl: require('../../images/face-icon-1.png'),
    role: 'UI Developer',
  },
  {
    name: 'Sumitra Suresh Sundaram',
    profileUrl: require('../../images/face-icon-2.png'),
    role: 'UX Designer',
  },
  {
    name: 'Indumati Indraneel Iyengar',
    profileUrl: require('../../images/face-icon-3.png'),
    role: 'Software Developer',
  },
];

const CoreConceptStylishComponentsShowCase = () => (
  <View<TViewStyle, TStyleNamespace>
    styleNames={['Screen', 'BackgroundColor.Primary1']}>
    <SafeAreaView<TSafeAreaViewStyle, TStyleNamespace> />
    <View<TViewStyle, TStyleNamespace>
      styleNames={['Screen.Header', 'Padding']}>
      <Text<TTextStyle, TStyleNamespace> styleNames={['H1']}>
        Stylish Components
      </Text>
    </View>
    <View<TViewStyle, TStyleNamespace> styleNames={['Screen.Body', 'Padding']}>
      <View<TViewStyle, TStyleNamespace>
        styleNames={[
          'List',
          'Border.Radius',
          'BackgroundColor.White',
          'Margin.Bottom.Large',
        ]}>
        {data.map((it, index) => (
          <View<TViewStyle, TStyleNamespace>
            key={index}
            styleNames={
              index > 0 ? ['List.Item', 'Border.Top'] : ['List.Item']
            }>
            <View<TViewStyle, TStyleNamespace> styleNames={['List.Item.Left']}>
              <Image<TImageStyle, TStyleNamespace>
                styleNames={['Avatar']}
                source={it.profileUrl}
              />
            </View>
            <View<TViewStyle, TStyleNamespace> styleNames={['List.Item.Body']}>
              <Text<TTextStyle, TStyleNamespace> styleNames={['Bold.Semi']}>
                {it.name}
              </Text>
              <Text<TTextStyle, TStyleNamespace>
                styleNames={['Color.Secondary', 'Small']}>
                {it.role}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View<TViewStyle, TStyleNamespace>
        styleNames={['List', 'Margin.Top.Large']}>
        {data.map((it, index) => (
          <View<TViewStyle, TStyleNamespace>
            key={index}
            styleNames={[
              'List.Item',
              'Border.Radius',
              'BackgroundColor.White',
              'Margin.Bottom',
            ]}>
            <View<TViewStyle, TStyleNamespace> styleNames={['List.Item.Left']}>
              <Image<TImageStyle, TStyleNamespace>
                styleNames={['Avatar', 'Avatar.Large', 'Avatar.Square']}
                source={it.profileUrl}
              />
            </View>
            <View<TViewStyle, TStyleNamespace>
              styleNames={['List.Item.Body', 'Flex.JustifyContent.Center']}>
              <Text<TTextStyle, TStyleNamespace>
                styleNames={['Large', 'Bold.Semi']}>
                {it.name}
              </Text>
              <Text<TTextStyle, TStyleNamespace>
                styleNames={['Color.Secondary']}>
                {it.role}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  </View>
);

export default CoreConceptStylishComponentsShowCase;
