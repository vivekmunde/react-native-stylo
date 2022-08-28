import React from 'react';

import Stylish from '../../stylo/stylish';

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

const UsageStylishComponentsShowCase = () => (
  <Stylish.View styleNames={['Screen']}>
    <Stylish.SafeAreaView />
    <Stylish.View styleNames={['Screen.Header', 'Padding']}>
      <Stylish.Text styleNames={['H1']}>Usage</Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['Screen.Body', 'Padding']}>
      <Stylish.Text styleNames={['H3', 'Margin.Bottom.Large']}>
        Stylish Components
      </Stylish.Text>

      <Stylish.View
        styleNames={[
          'List',
          'Border',
          'Border.Radius',
          'BackgroundColor.Alpha10',
          'Margin.Bottom.Large',
        ]}>
        {data.map((it, index) => (
          <Stylish.View
            key={index}
            styleNames={
              index > 0 ? ['List.Item', 'Border.Top'] : ['List.Item']
            }>
            <Stylish.View styleNames={['List.Item.Left']}>
              <Stylish.Image styleNames={['Avatar']} source={it.profileUrl} />
            </Stylish.View>
            <Stylish.View styleNames={['List.Item.Body']}>
              <Stylish.Text styleNames={['Bold.Semi']}>{it.name}</Stylish.Text>
              <Stylish.Text styleNames={['Color.Secondary', 'Small']}>
                {it.role}
              </Stylish.Text>
            </Stylish.View>
          </Stylish.View>
        ))}
      </Stylish.View>
    </Stylish.View>
  </Stylish.View>
);

export default UsageStylishComponentsShowCase;
