import React from 'react';
import { Screen, ScreenBody, ScreenHeader } from '../../components/showcase-screen-layout';
import Stylish from '../../stylo/stylish';

const TagShowCase = () => (
  <Screen>
    <ScreenHeader title="Tag" />
    <ScreenBody>
      <React.Fragment>
        <Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Margin.Bottom.Large']}>
          <Stylish.View styleNames={['Tag', 'BackgroundColor.Primary']}>
            <Stylish.Text styleNames={['Tag.Text', 'Color.White']}>
              Default
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Small', 'BackgroundColor.Info']}>
            <Stylish.Text styleNames={['Tag.Text', 'Small', 'Color.White']}>
              Small
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Large', 'BackgroundColor.Warning']}>
            <Stylish.Text styleNames={['Tag.Text', 'Large', 'Color.White']}>
              Large
            </Stylish.Text>
          </Stylish.View>
        </Stylish.View>

        <Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Margin.Bottom.Large']}>
          <Stylish.View styleNames={['Tag', 'Border', 'Border.Color.Primary']}>
            <Stylish.Text styleNames={['Tag.Text', 'Color.Primary']}>
              Default
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Small', 'Border', 'Border.Color.Info']}>
            <Stylish.Text styleNames={['Tag.Text', 'Small', 'Color.Info']}>
              Small
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Large', 'Border', 'Border.Color.Warning']}>
            <Stylish.Text styleNames={['Tag.Text', 'Large', 'Color.Warning']}>
              Large
            </Stylish.Text>
          </Stylish.View>
        </Stylish.View>

        <Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Margin.Bottom.Large']}>
          <Stylish.View styleNames={['Tag', 'BackgroundColor.Primary']}>
            <Stylish.Text styleNames={['Tag.Text', 'Color.White']}>
              Colour
            </Stylish.Text>
            <Stylish.Icon.AntDesign name="checkcircleo" styleNames={['Tag.Icon', 'Tag.Icon.Right', 'Color.White']} />
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Small', 'BackgroundColor.Info']}>
            <Stylish.Text styleNames={['Tag.Text', 'Small', 'Color.White']}>
              Size
            </Stylish.Text>
            <Stylish.Icon.AntDesign name="checkcircleo" styleNames={['Tag.Icon', 'Tag.Icon.Right', 'Small', 'Color.White']} />
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Large', 'BackgroundColor.Warning']}>
            <Stylish.Text styleNames={['Tag.Text', 'Large', 'Color.White']}>
              Shape
            </Stylish.Text>
            <Stylish.Icon.AntDesign name="checkcircleo" styleNames={['Tag.Icon', 'Tag.Icon.Right', 'Large', 'Color.White']} />
          </Stylish.View>
        </Stylish.View>

        <Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Margin.Bottom.Large']}>
          <Stylish.View styleNames={['Tag', 'Border', 'Border.Color.Primary', 'BackgroundColor.Alpha10']}>
            <Stylish.Icon.AntDesign name="checkcircle" styleNames={['Tag.Icon', 'Tag.Icon.Left', 'Color.Primary']} />
            <Stylish.Text styleNames={['Tag.Text', 'Color.Primary']}>
              Colour
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Small', 'Border', 'Border.Color.Info', 'BackgroundColor.Alpha10']}>
            <Stylish.Icon.AntDesign name="checkcircle" styleNames={['Tag.Icon', 'Tag.Icon.Left', 'Small', 'Color.Info']} />
            <Stylish.Text styleNames={['Tag.Text', 'Small', 'Color.Info']}>
              Size
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Large', 'Border', 'Border.Color.Warning', 'BackgroundColor.Alpha10']}>
            <Stylish.Icon.AntDesign name="checkcircle" styleNames={['Tag.Icon', 'Tag.Icon.Left', 'Large', 'Color.Warning']} />
            <Stylish.Text styleNames={['Tag.Text', 'Large', 'Color.Warning']}>
              Shape
            </Stylish.Text>
          </Stylish.View>
        </Stylish.View>

        <Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Margin.Bottom.Large']}>
          <Stylish.View styleNames={['Tag', 'BackgroundColor.Primary']}>
            <Stylish.Image source={require('../../images/face-icon-1.png')} styleNames={['Tag.Avatar', 'Tag.Avatar.Right']} />
            <Stylish.Text styleNames={['Tag.Text', 'Color.White']}>
              Sajan
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Small', 'BackgroundColor.Info']}>
            <Stylish.Image source={require('../../images/face-icon-2.png')} styleNames={['Tag.Avatar', 'Tag.Avatar.Small', 'Tag.Avatar.Right']} />
            <Stylish.Text styleNames={['Tag.Text', 'Small', 'Color.White']}>
              Alma
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Large', 'BackgroundColor.Warning']}>
            <Stylish.Text styleNames={['Tag.Text', 'Large', 'Color.White']}>
              Nalini
            </Stylish.Text>
            <Stylish.Image source={require('../../images/face-icon-3.png')} styleNames={['Tag.Avatar', 'Tag.Avatar.Large', 'Tag.Avatar.Right']} />
          </Stylish.View>
        </Stylish.View>

        <Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Margin.Bottom.Large']}>
          <Stylish.View styleNames={['Tag', 'Border', 'Border.Color.Primary', 'BackgroundColor.Alpha10']}>
            <Stylish.Image source={require('../../images/face-icon-1.png')} styleNames={['Tag.Avatar', 'Tag.Avatar.Left']} />
            <Stylish.Text styleNames={['Tag.Text', 'Color.Primary']}>
              Sajan
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Small', 'Border', 'Border.Color.Info', 'BackgroundColor.Alpha10']}>
            <Stylish.Image source={require('../../images/face-icon-2.png')} styleNames={['Tag.Avatar', 'Tag.Avatar.Small', 'Tag.Avatar.Left']} />
            <Stylish.Text styleNames={['Tag.Text', 'Small', 'Color.Info']}>
              Alma
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Tag', 'Tag.Large', 'Border', 'Border.Color.Warning', 'BackgroundColor.Alpha10']}>
            <Stylish.Image source={require('../../images/face-icon-3.png')} styleNames={['Tag.Avatar', 'Tag.Avatar.Large', 'Tag.Avatar.Left']} />
            <Stylish.Text styleNames={['Tag.Text', 'Large', 'Color.Warning']}>
              Nalini
            </Stylish.Text>
          </Stylish.View>
        </Stylish.View>
      </React.Fragment>
    </ScreenBody>
  </Screen>
);

export default TagShowCase;
