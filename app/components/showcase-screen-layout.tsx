import React from 'react';
import { StyleSheet } from 'react-native';

import Stylish from '../stylo/stylish';

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  headerTitle: { marginBottom: 0 },
});

const ShowcaseScreenLayout: React.FC<{
  transparent?: boolean;
  onGoBack: () => void;
  renderTitle: () => string;
  renderBody: () => React.ReactNode;
}> = ({ transparent, renderTitle, renderBody }) => (
  <Stylish.View
    styleNames={
      transparent ? ['Screen'] : ['Screen', 'BackgroundColor.Primary1']
    }>
    <Stylish.SafeAreaView />
    <Stylish.View
      styleNames={['Screen.Header', 'Padding.Top', 'Padding.Bottom']}>
      {/* <Stylish.View styleNames={['Screen.Header.Left', 'Padding.Left']}>
        <Stylish.TouchableOpacity
          styleNames={['Button', 'Button.Circle', 'BackgroundColor.White']}
          onPress={() => onGoBack()}>
          <Stylish.Icon.AntDesign
            name="left"
            styleNames={['Button.Icon', 'Button.Circle.Icon']}
          />
        </Stylish.TouchableOpacity>
      </Stylish.View> */}
      <Stylish.View
        styleNames={['Screen.Header.Body', 'Padding.Left', 'Padding.Right']}>
        <Stylish.Text styleNames={['H3']} style={styles.headerTitle}>
          {renderTitle()}
        </Stylish.Text>
      </Stylish.View>
    </Stylish.View>
    <Stylish.View styleNames={['Screen.Body']}>
      <Stylish.ScrollView style={styles.scrollView}>
        <Stylish.View styleNames={['Padding']}>{renderBody()}</Stylish.View>
      </Stylish.ScrollView>
    </Stylish.View>
  </Stylish.View>
);

export default ShowcaseScreenLayout;
