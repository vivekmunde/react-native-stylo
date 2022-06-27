import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { ThemeProvider } from '../stylo';
import Stylish from './stylo/stylish';
import { styles, variables } from './stylo/themes/default';

const homeStyles = StyleSheet.create({
  scrollView: { flex: 1 },
  headerTitle: { marginBottom: 0 },
});

const Home = () => {
  return (
    <ThemeProvider variables={variables} styles={styles}>
      <Stylish.View styleNames={['Screen']}>
        <Stylish.ScrollView style={homeStyles.scrollView}>
          <Stylish.SafeAreaView>
            <StatusBar barStyle="dark-content" />
          </Stylish.SafeAreaView>
          <Stylish.View
            styleNames={[
              'Screen.Header',
              'Flex.Column',
              'Flex.AlignItems.Center',
              'Flex.JustifyContent.Center',
              'Padding',
            ]}>
            <Stylish.Text
              styleNames={['H1', 'Align.Center']}
              style={homeStyles.headerTitle}>
              React Native Skeleton
            </Stylish.Text>
            <Stylish.Text styleNames={['Align.Center']}>
              {'Highly composable & scalable themes'}
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Screen.Body']}>
            <Stylish.View styleNames={['Padding.Large', 'Flex.Column']}>
              <Stylish.Text>• Loosely coupled style definitions</Stylish.Text>
              <Stylish.Text>• Compose your own theme</Stylish.Text>
              <Stylish.Text>• Compose your own components</Stylish.Text>
            </Stylish.View>
          </Stylish.View>
        </Stylish.ScrollView>
        <Stylish.View
          styleNames={[
            'Screen.Footer',
            'Padding',
            'Flex.Row',
            'Flex.AlignItems.Center',
            'Flex.JustifyContent.SpaceAround',
          ]}>
          {/*  */}
        </Stylish.View>
      </Stylish.View>
      <Stylish.SafeAreaView />
    </ThemeProvider>
  );
};

export default Home;
