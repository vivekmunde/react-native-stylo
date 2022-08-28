import React from 'react';
import { Screen, ScreenBody, ScreenHeader } from '../../components/showcase-screen-layout';
import Stylish from '../../stylo/stylish';

const TextShowCase = () => (
  <Screen>
    <ScreenHeader title="TextInput" />
    <ScreenBody>
      <React.Fragment>
        <Stylish.TextInput
          styleNames={['Border', 'BackgroundColor.Alpha10', 'Margin.Bottom.Large']}
          value="Stylo" />

        <Stylish.TextInput
          styleNames={['Border', 'Border.Color.Grey7', 'BackgroundColor.Alpha10', 'Bold', 'Margin.Bottom.Large']}
          value="A Bold Impression!" />

        <Stylish.TextInput
          styleNames={['Border', 'Border.Color.Danger', 'Color.Danger', 'BackgroundColor.Danger1', 'Margin.Bottom.Large']}
          value="An invalid value" />

        <Stylish.TextInput
          styleNames={['Align.Center', 'Border', 'BackgroundColor.Alpha10', 'Margin.Bottom.Large']}
          value="Center" />

        <Stylish.TextInput
          styleNames={['Align.Right', 'Border', 'BackgroundColor.Alpha10', 'Margin.Bottom.Large']}
          value="Right" />

        <Stylish.TextInput
          styleNames={['Border', 'BackgroundColor.Alpha10', 'Small', 'Margin.Bottom.Large']}
          value="A small input" />

        <Stylish.TextInput
          styleNames={['Border', 'BackgroundColor.Alpha10', 'Large', 'Margin.Bottom.Large']}
          value="A larger input" />

        <Stylish.TextInput
          styleNames={['Border', 'BackgroundColor.Alpha10', 'Padding.Large', 'Margin.Bottom.Large']}
          value="A relaxed input" />
      </React.Fragment>
    </ScreenBody>
  </Screen>
);

export default TextShowCase;
