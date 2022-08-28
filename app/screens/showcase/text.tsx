import React from 'react';
import { Screen, ScreenBody, ScreenHeader } from '../../components/showcase-screen-layout';
import Stylish from '../../stylo/stylish';

const TextShowCase = () => (
  <Screen>
    <ScreenHeader title="Text" />
    <ScreenBody>
      <React.Fragment>
        <Stylish.Text styleNames={['Margin.Bottom']}>Default</Stylish.Text>
        <Stylish.Text styleNames={['Bold', 'Margin.Bottom']}>
          A bold impression!
        </Stylish.Text>
        <Stylish.Text styleNames={['Small', 'Margin.Bottom.Large']}>
          Small but powerfull!
        </Stylish.Text>

        <Stylish.Text styleNames={['H1', 'Color.Primary']}>H1</Stylish.Text>
        <Stylish.Text styleNames={['H2', 'Color.Info']}>H2</Stylish.Text>
        <Stylish.Text styleNames={['H3', 'Color.Warning']}>H3</Stylish.Text>
        <Stylish.Text
          styleNames={['H4', 'Color.Danger', 'Margin.Bottom.Large']}>
          H4
        </Stylish.Text>

        <Stylish.Text styleNames={['Paragraph', 'Align.Center']}>
          Stylo follows a philosophy called Styles only, with which it provides
          only the style definitions & does not provide any behavioral/action
          components like Card, Badge, Picker etc. The library provides
          extensive style definitions enough to style/create all kinds of
          components, right from simple Text to complicated Pickers & Forms.
        </Stylish.Text>
      </React.Fragment>
    </ScreenBody>
  </Screen>
);

export default TextShowCase;
