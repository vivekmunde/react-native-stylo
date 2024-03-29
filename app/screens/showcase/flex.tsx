import React from 'react';
import { Screen, ScreenBody, ScreenHeader } from '../../components/showcase-screen-layout';
import Stylish from '../../stylo/stylish';

const FlexShowCase = () => (
  <Screen>
    <ScreenHeader title="Flex" />
    <ScreenBody>
      <React.Fragment>
        <Stylish.View
          styleNames={[
            'Flex.Row',
            'Border',
            'Border.Radius',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Flex </Stylish.Text>
          <Stylish.Text>Direction </Stylish.Text>
          <Stylish.Text>Row</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Flex.Row',
            'Flex.JustifyContent.Center',
            'Border',
            'Border.Radius',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Flex Row </Stylish.Text>
          <Stylish.Text>Justify </Stylish.Text>
          <Stylish.Text>Center</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Flex.Row',
            'Flex.JustifyContent.End',
            'Border',
            'Border.Radius',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Flex Row </Stylish.Text>
          <Stylish.Text>Justify </Stylish.Text>
          <Stylish.Text>End</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Flex.Row',
            'Flex.JustifyContent.SpaceBetween',
            'Border',
            'Border.Radius',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Flex Row</Stylish.Text>
          <Stylish.Text>Justify</Stylish.Text>
          <Stylish.Text>SpaceBetween</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Flex.Column',
            'Border',
            'Border.Radius',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Flex</Stylish.Text>
          <Stylish.Text>Direction</Stylish.Text>
          <Stylish.Text>Column</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Flex.Column',
            'Flex.AlignItems.End',
            'Border',
            'Border.Radius',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Flex Column</Stylish.Text>
          <Stylish.Text>Align Items</Stylish.Text>
          <Stylish.Text>End</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Flex.Column',
            'Flex.AlignItems.Center',
            'Border',
            'Border.Radius',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Flex Column</Stylish.Text>
          <Stylish.Text>Align Items</Stylish.Text>
          <Stylish.Text>Cender</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Flex.Row',
            'Border',
            'Border.Radius',
            'BackgroundColor.Alpha10',
            'Margin.Bottom',
          ]}>
          <Stylish.View
            styleNames={[
              'Flex.1',
              'Flex.AlignItems.Center',
              'Padding',
              'Border.Right',
            ]}>
            <Stylish.Text>Flex.1</Stylish.Text>
          </Stylish.View>
          <Stylish.View
            styleNames={[
              'Flex.2',
              'Flex.AlignItems.Center',
              'Padding',
              'Border.Right',
            ]}>
            <Stylish.Text>Flex.2</Stylish.Text>
          </Stylish.View>
          <Stylish.View
            styleNames={['Flex.3', 'Flex.AlignItems.Center', 'Padding']}>
            <Stylish.Text>Flex.3</Stylish.Text>
          </Stylish.View>
        </Stylish.View>
      </React.Fragment>
    </ScreenBody>
  </Screen>
);

export default FlexShowCase;
