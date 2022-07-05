import React from 'react';
import ShowcaseScreenLayout from '../components/showcase-screen-layout';
import Stylish from '../stylo/stylish';

const FontColor = () => (
  <ShowcaseScreenLayout
    onGoBack={() => null}
    renderTitle={() => 'FontColor'}
    renderBody={() => (
      <React.Fragment>
        <Stylish.Text styleNames={['Margin.Bottom']}>
          Default Color
        </Stylish.Text>

        <Stylish.Text styleNames={['Color.Primary', 'Margin.Bottom']}>
          Color.Primary
        </Stylish.Text>

        <Stylish.Text styleNames={['Color.Info', 'Margin.Bottom']}>
          Color.Info
        </Stylish.Text>

        <Stylish.Text styleNames={['Color.Warning', 'Margin.Bottom']}>
          Color.Warning
        </Stylish.Text>

        <Stylish.Text styleNames={['Color.Danger', 'Margin.Bottom']}>
          Color.Danger
        </Stylish.Text>
      </React.Fragment>
    )}
  />
);

export default FontColor;
