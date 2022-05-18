import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import * as Skinned from '../styled/stylish';
import { styles, variables } from '../styled/themes/default';
import { ThemeProvider } from '../stylo';

const homeStyles = StyleSheet.create({
  scrollView: { flex: 1 },
  headerTitle: { marginBottom: 0 },
});

const Home = () => {
  return (
    <ThemeProvider variables={variables} styles={styles}>
      <Skinned.View styleNames={['Screen']}>
        <Skinned.ScrollView style={homeStyles.scrollView}>
          <Skinned.SafeAreaView>
            <StatusBar barStyle="dark-content" />
          </Skinned.SafeAreaView>
          <Skinned.View
            styleNames={[
              'Screen.Header',
              'Flex.Column',
              'Flex.AlignItems.Center',
              'Flex.JustifyContent.Center',
              'Padding',
            ]}>
            <Skinned.Text
              styleNames={['H1', 'Align.Center']}
              style={homeStyles.headerTitle}>
              React Native Skeleton
            </Skinned.Text>
            <Skinned.Text styleNames={['Align.Center']}>
              {'Highly composable & scalable themes'}
            </Skinned.Text>
          </Skinned.View>
          <Skinned.View styleNames={['Screen.Body']}>
            <Skinned.View styleNames={['Padding', 'Flex.Column']}>
              <Skinned.Text>• Loosely coupled style definitions</Skinned.Text>
              <Skinned.Text>• Compose your own theme</Skinned.Text>
              <Skinned.Text>• Compose your own components</Skinned.Text>
            </Skinned.View>
          </Skinned.View>
        </Skinned.ScrollView>
        <Skinned.View
          styleNames={[
            'Screen.Footer',
            'Padding',
            'Flex.Row',
            'Flex.AlignItems.Center',
            'Flex.JustifyContent.SpaceAround',
          ]}>
          {/*  */}
        </Skinned.View>
      </Skinned.View>
      <Skinned.SafeAreaView />
    </ThemeProvider>
  );
};

export default Home;
