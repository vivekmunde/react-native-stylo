import React from 'react';
import ShowcaseScreenLayout from '../components/showcase-screen-layout';
import Stylish from '../stylo/stylish';

const Padding = () => (
  <ShowcaseScreenLayout
    onGoBack={() => null}
    renderTitle={() => 'Padding'}
    renderBody={() => (
      <React.Fragment>
        <Stylish.View
          styleNames={[
            'Padding',
            'Border',
            'Border.Radius',
            'Border.Color.Primary2',
            'BackgroundColor.White',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Padding</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Padding.Small',
            'Border',
            'Border.Radius',
            'Border.Color.Primary2',
            'BackgroundColor.White',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Padding.Small</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Padding.Large',
            'Border',
            'Border.Radius',
            'Border.Color.Primary2',
            'BackgroundColor.White',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Padding.Large</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Padding.Left.Large',
            'Padding.Top.Small',
            'Padding.Right.Small',
            'Padding.Bottom.Small',
            'Border',
            'Border.Radius',
            'Border.Color.Primary2',
            'BackgroundColor.White',
            'Margin.Bottom',
          ]}>
          <Stylish.Text>Padding.Left.Large</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Padding.Right.Large',
            'Padding.Top.Small',
            'Padding.Bottom.Small',
            'Padding.Left.Small',
            'Border',
            'Border.Radius',
            'Border.Color.Primary2',
            'BackgroundColor.White',
            'Margin.Bottom',
            'Flex.AlignItems.End',
          ]}>
          <Stylish.Text>Padding.Right.Large</Stylish.Text>
        </Stylish.View>
      </React.Fragment>
    )}
  />
);

export default Padding;
