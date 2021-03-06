import React from 'react';
import ShowcaseScreenLayout from '../../components/showcase-screen-layout';
import Stylish from '../../stylo/stylish';

const MarginShowCase = () => (
  <ShowcaseScreenLayout
    onGoBack={() => null}
    renderTitle={() => 'Margin'}
    renderBody={() => (
      <React.Fragment>
        <Stylish.Text styleNames={['Margin']}>
          {`Margin (top, right, bottom & left) applied to a text component.`}
        </Stylish.Text>

        <Stylish.Text styleNames={['Margin.Large']}>
          {`Large Margin (top, right, bottom & left) applied to a text component.`}
        </Stylish.Text>

        <Stylish.View
          styleNames={[
            'Margin',
            'Padding',
            'Border',
            'Border.Radius',
            'Border.Color.Primary2',
            'BackgroundColor.White',
          ]}>
          <Stylish.Text>Margin</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Margin.Large',
            'Padding',
            'Border',
            'Border.Radius',
            'Border.Color.Primary2',
            'BackgroundColor.White',
          ]}>
          <Stylish.Text>Margin.Large</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Margin.Left',
            'Margin.Bottom',
            'Padding',
            'Border',
            'Border.Radius',
            'Border.Color.Primary2',
            'BackgroundColor.White',
          ]}>
          <Stylish.Text>{`Margin Left & Bottom`}</Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'Margin.Top',
            'Margin.Right',
            'Padding',
            'Border',
            'Border.Radius',
            'Border.Color.Primary2',
            'BackgroundColor.White',
          ]}>
          <Stylish.Text>{`Margin Top & Right`}</Stylish.Text>
        </Stylish.View>
      </React.Fragment>
    )}
  />
);

export default MarginShowCase;
