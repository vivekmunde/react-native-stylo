import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Screen, ScreenBody, ScreenHeader } from '../../components/showcase-screen-layout';
import Stylish from '../../stylo/stylish';
import { ThemeSwitchContext } from '../../theme-switch-provider';

const styles = StyleSheet.create({
  imageBackground: { flex: 1 },
});

const ImageBackgroundShowCase = () => {
  const { onGetTheme } = useContext(ThemeSwitchContext);

  const theme = onGetTheme();

  return (
    <Stylish.ImageBackground
      style={styles.imageBackground}
      source={theme === 'Light' ? require('../../images/screen-bg-light-1.png') : require('../../images/screen-bg-dark-1.png')}
      styleNames={['Padding.Large']}>
      <Screen transparent>
        <ScreenHeader title="ImageBackground" />
        <ScreenBody>
          <React.Fragment>
            <Stylish.Text styleNames={['Paragraph']}>
              Stylo follows a philosophy called Styles only, with which it
              provides only the style definitions & does not provide any
              behavioral/action components like Card, Badge, Picker etc. The
              library provides extensive style definitions enough to style/create
              all kinds of components, right from simple Text to complicated
              Pickers & Forms.
            </Stylish.Text>
            <Stylish.Text styleNames={['Paragraph']}>
              Stylo provides a default theme with pre-defined style types and
              styles. App can copy these & then can immediately start using it or
              even modify them as per needs.
            </Stylish.Text>
            <Stylish.TouchableOpacity
              styleNames={[
                'Button',
                'Button.Small',
                'Border',
                'Border.Color.Primary',
                'Flex.JustifyContent.SpaceBetween',
                'Margin.Top.Large',
              ]}>
              <Stylish.Text styleNames={['Button.Text', 'Color.Primary']}>
                Read next article
              </Stylish.Text>
              <Stylish.Icon.AntDesign
                name="right"
                styleNames={['Button.Icon', 'Color.Primary']}
              />
            </Stylish.TouchableOpacity>
          </React.Fragment>
        </ScreenBody>
      </Screen>
    </Stylish.ImageBackground>
  );
};

export default ImageBackgroundShowCase;
