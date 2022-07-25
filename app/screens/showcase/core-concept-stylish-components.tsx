import React from 'react';
import { Image, SafeAreaView, Text, View } from '../../../stylo';
import {
  TImageStyle,
  TSafeAreaViewStyle,
  TTextStyle,
  TViewStyle
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
  <View<TViewStyle> styleNames={['Screen', 'BackgroundColor.Body']}>
    <SafeAreaView<TSafeAreaViewStyle> />
    <View<TViewStyle> styleNames={['Screen.Header', 'Padding']}>
      <Text<TTextStyle> styleNames={['H1']}>Stylish Components</Text>
    </View>
    <View<TViewStyle> styleNames={['Screen.Body', 'Padding']}>
      <View<TViewStyle>
        styleNames={[
          'List',
          'Border.Radius',
          'BackgroundColor.Alpha10',
          'Margin.Bottom.Large',
        ]}>
        {data.map((it, index) => (
          <View<TViewStyle>
            key={index}
            styleNames={
              index > 0 ? ['List.Item', 'Border.Top'] : ['List.Item']
            }>
            <View<TViewStyle> styleNames={['List.Item.Left']}>
              <Image<TImageStyle>
                styleNames={['Avatar']}
                source={it.profileUrl}
              />
            </View>
            <View<TViewStyle> styleNames={['List.Item.Body']}>
              <Text<TTextStyle> styleNames={['Bold.Semi']}>{it.name}</Text>
              <Text<TTextStyle> styleNames={['Color.Secondary', 'Small']}>
                {it.role}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View<TViewStyle> styleNames={['List', 'Margin.Top.Large']}>
        {data.map((it, index) => (
          <View<TViewStyle>
            key={index}
            styleNames={[
              'List.Item',
              'Border.Radius',
              'BackgroundColor.Alpha10',
              'Margin.Bottom',
            ]}>
            <View<TViewStyle> styleNames={['List.Item.Left']}>
              <Image<TImageStyle>
                styleNames={['Avatar', 'Avatar.Large', 'Avatar.Square']}
                source={it.profileUrl}
              />
            </View>
            <View<TViewStyle>
              styleNames={['List.Item.Body', 'Flex.JustifyContent.Center']}>
              <Text<TTextStyle> styleNames={['Large', 'Bold.Semi']}>
                {it.name}
              </Text>
              <Text<TTextStyle> styleNames={['Color.Secondary']}>
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
