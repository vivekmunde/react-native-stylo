import React from 'react';
import { Screen, ScreenBody, ScreenHeader } from '../../components/showcase-screen-layout';
import Stylish from '../../stylo/stylish';

const BadgeShowCase = () => (
  <Screen>
    <ScreenHeader title="Badge" />
    <ScreenBody>
      <React.Fragment>
        <Stylish.View
          styleNames={[
            'Flex.Row',
            'Flex.Wrap',
            'Flex.AlignItems.Center',
            'Flex.AlignContent.Center',
          ]}>
          <Stylish.View
            styleNames={[
              'Badge',
              'BackgroundColor.Primary',
              'Margin.Bottom.Large',
              'Margin.Right.Large',
            ]}>
            <Stylish.Text styleNames={['Badge.Text', 'Color.White']}>
              7
            </Stylish.Text>
          </Stylish.View>

          <Stylish.View
            styleNames={[
              'Badge',
              'Badge.Small',
              'BackgroundColor.Info',
              'Margin.Bottom.Large',
              'Margin.Right.Large',
            ]}>
            <Stylish.Text
              styleNames={['Badge.Text', 'Badge.Text.Small', 'Color.White']}>
              5
            </Stylish.Text>
          </Stylish.View>

          <Stylish.View
            styleNames={[
              'Badge',
              'Badge.Large',
              'BackgroundColor.Warning',
              'Margin.Bottom.Large',
              'Margin.Right.Large',
            ]}>
            <Stylish.Text
              styleNames={['Badge.Text', 'Badge.Text.Large', 'Color.White']}>
              9
            </Stylish.Text>
          </Stylish.View>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Flex.Row',
            'Flex.Wrap',
            'Flex.AlignItems.Center',
            'Flex.AlignContent.Center',
          ]}>
          <Stylish.View
            styleNames={[
              'Badge',
              'Border',
              'Border.Color.Primary',
              'BackgroundColor.Alpha10',
              'Margin.Bottom.Large',
              'Margin.Right.Large',
            ]}>
            <Stylish.Text styleNames={['Badge.Text', 'Color.Primary']}>
              7
            </Stylish.Text>
          </Stylish.View>

          <Stylish.View
            styleNames={[
              'Badge',
              'Badge.Small',
              'Border',
              'Border.Color.Info',
              'BackgroundColor.Alpha10',
              'Margin.Bottom.Large',
              'Margin.Right.Large',
            ]}>
            <Stylish.Text
              styleNames={['Badge.Text', 'Badge.Text.Small', 'Color.Info']}>
              5
            </Stylish.Text>
          </Stylish.View>

          <Stylish.View
            styleNames={[
              'Badge',
              'Badge.Large',
              'Border',
              'Border.Color.Warning',
              'BackgroundColor.Alpha10',
              'Margin.Bottom.Large',
              'Margin.Right.Large',
            ]}>
            <Stylish.Text
              styleNames={['Badge.Text', 'Badge.Text.Large', 'Color.Warning']}>
              9
            </Stylish.Text>
          </Stylish.View>
        </Stylish.View>
      </React.Fragment>
    </ScreenBody>
  </Screen>
);

export default BadgeShowCase;
