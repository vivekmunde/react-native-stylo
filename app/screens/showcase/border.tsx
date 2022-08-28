import React from 'react';
import { Screen, ScreenBody, ScreenHeader } from '../../components/showcase-screen-layout';
import Stylish from '../../stylo/stylish';

const BorderShowCase = () => (
  <Screen>
    <ScreenHeader title="Border" />
    <ScreenBody>
      <React.Fragment>
        <Stylish.View
          styleNames={[
            'Border',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Border</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Border',
            'Border.Radius',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Border.Radius</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Border',
            'Border.Radius',
            'Border.Color.Primary',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text styleNames={['Color.Primary']}>
            Border.Color.Primary
          </Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Border',
            'Border.Radius',
            'Border.Color.Warning6',
            'Border.Style.Dashed',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text styleNames={['Color.Warning6']}>
            Border.Style.Dashed
          </Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Border',
            'Border.Radius',
            'Border.Color.Danger',
            'Border.Style.Dotted',
            'BackgroundColor.Alpha10',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text styleNames={['Color.Danger']}>
            Border.Style.Dotted
          </Stylish.Text>
        </Stylish.View>
      </React.Fragment>
    </ScreenBody>
  </Screen>
);

export default BorderShowCase;
