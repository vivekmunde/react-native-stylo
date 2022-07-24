import React from 'react';
import { Screen, ScreenBody, ScreenHeader } from '../../components/showcase-screen-layout';
import Stylish from '../../stylo/stylish';

const BackgroundColorShowCase = () => (
  <Screen>
    <ScreenHeader title="BackgroundColor" />
    <ScreenBody>
      <React.Fragment>
        <Stylish.View
          styleNames={[
            'BackgroundColor.Primary',
            'Padding',
            'Border.Radius',
            'Margin.Bottom',
          ]}>
          <Stylish.Text styleNames={['Color.White']}>
            BackgroundColor.Primary
          </Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'BackgroundColor.Info',
            'Padding',
            'Border.Radius',
            'Margin.Bottom',
          ]}>
          <Stylish.Text styleNames={['Color.White']}>
            BackgroundColor.Info
          </Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'BackgroundColor.Warning',
            'Padding',
            'Border.Radius',
            'Margin.Bottom',
          ]}>
          <Stylish.Text styleNames={['Color.White']}>
            BackgroundColor.Warning
          </Stylish.Text>
        </Stylish.View>

        <Stylish.View
          styleNames={[
            'BackgroundColor.Danger',
            'Padding',
            'Border.Radius',
            'Margin.Bottom',
          ]}>
          <Stylish.Text styleNames={['Color.White']}>
            BackgroundColor.Danger
          </Stylish.Text>
        </Stylish.View>
      </React.Fragment>
    </ScreenBody>
  </Screen>
);

export default BackgroundColorShowCase;
