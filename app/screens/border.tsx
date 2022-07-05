import React from 'react';
import ShowcaseScreenLayout from '../components/showcase-screen-layout';
import Stylish from '../stylo/stylish';

const Border = () => (
  <ShowcaseScreenLayout
    onGoBack={() => null}
    renderTitle={() => 'Border'}
    renderBody={() => (
      <React.Fragment>
        <Stylish.View
          styleNames={[
            'Border',
            'BackgroundColor.White',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Border</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Border',
            'Border.Radius',
            'BackgroundColor.White',
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
            'BackgroundColor.White',
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
            'BackgroundColor.White',
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
            'BackgroundColor.White',
            'Padding',
            'Margin.Bottom',
          ]}>
          <Stylish.Text styleNames={['Color.Danger']}>
            Border.Style.Dotted
          </Stylish.Text>
        </Stylish.View>
      </React.Fragment>
    )}
  />
);

export default Border;
