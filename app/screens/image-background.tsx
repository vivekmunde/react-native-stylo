import React from 'react';
import ShowcaseScreenLayout from '../components/showcase-screen-layout';
import Stylish from '../stylo/stylish';

const ImageBackground = () => (
  <Stylish.ImageBackground
    style={{ flex: 1 }}
    source={require('../images/screen-bg-1.png')}
    styleNames={['Padding.Large']}>
    <ShowcaseScreenLayout
      transparent
      onGoBack={() => null}
      renderTitle={() => 'ImageBackground'}
      renderBody={() => (
        <React.Fragment>
          <Stylish.Text styleNames={['Paragraph']}>
            Stylo follows a philosophy called Styles only, with which it provides only the style definitions & does not provide any behavioral/action components like Card, Badge, Picker etc. The library provides extensive style definitions enough to style/create all kinds of components, right from simple Text to complicated Pickers & Forms.
          </Stylish.Text>
          <Stylish.Text styleNames={['Paragraph']}>
            Stylo provides a default theme with pre-defined style types and styles. App can copy these & then can immediately start using it or even modify them as per needs.
          </Stylish.Text>
          <Stylish.TouchableOpacity
            styleNames={['Button', 'Button.Small', 'Border', 'Border.Color.Primary', 'Flex.JustifyContent.SpaceBetween', 'Margin.Top.Large']}>
            <Stylish.Text styleNames={['Button.Text', 'Color.Primary']}>
              Read next article
            </Stylish.Text>
            <Stylish.Icon.AntDesign name="right" styleNames={['Button.Icon', 'Color.Primary']} />
          </Stylish.TouchableOpacity>
        </React.Fragment>
      )}
    />
  </Stylish.ImageBackground>
);

export default ImageBackground;
