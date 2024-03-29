import React from 'react';
import { Screen, ScreenBody, ScreenHeader } from '../../components/showcase-screen-layout';
import Stylish from '../../stylo/stylish';

const IconShowCase = () => (
  <Screen>
    <ScreenHeader title="Icon" />
    <ScreenBody>
      <React.Fragment>
        <Stylish.Icon.AntDesign
          name="home"
          styleNames={['Color.Primary', 'Margin']}
        />

        <Stylish.Icon.FontAwesome
          name="home"
          styleNames={['Color.Info', 'Large', 'Margin.Large']}
        />

        <Stylish.TouchableOpacity
          styleNames={[
            'Button',
            'BackgroundColor.Primary',
            'Margin.Bottom.Large',
          ]}>
          <Stylish.Text styleNames={['Color.White', 'Button.Text']}>
            Next
          </Stylish.Text>
          <Stylish.Icon.SimpleLineIcons
            name="arrow-right"
            styleNames={['Color.White', 'Button.Icon', 'Button.Icon.Right']}
          />
        </Stylish.TouchableOpacity>

        <Stylish.View styleNames={['Flex.Row']}>
          <Stylish.TouchableOpacity
            styleNames={[
              'Tag',
              'Border',
              'Border.Color.Info',
              'Margin.Bottom',
            ]}>
            <Stylish.Text styleNames={['Color.Info', 'Tag.Text']}>
              Checked
            </Stylish.Text>
            <Stylish.Icon.AntDesign
              name="check"
              styleNames={['Color.Info', 'Tag.Icon.Right']}
            />
          </Stylish.TouchableOpacity>
        </Stylish.View>
      </React.Fragment>
    </ScreenBody>
  </Screen>
);

export default IconShowCase;
