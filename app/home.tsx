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
      <Stylish.View styleNames={['Screen', 'BackgroundColor.Primary1']}>
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
          <Stylish.View styleNames={['Screen.Body', 'Padding']}>
            <Stylish.View
              styleNames={[
                'Border',
                'Border.Style.Dashed',
                'Border.Radius.Large',
                'Border.Color.Primary3',
              ]}>
              <Stylish.View
                styleNames={[
                  'Padding.Small',
                  'Flex.Column',
                  'Border',
                  'Border.Style.Dotted',
                  'Border.Radius.Large',
                  'Border.Color.Primary1',
                  'BackgroundColor.Primary2',
                ]}>
                <Stylish.View styleNames={['List']}>
                  <Stylish.TouchableOpacity styleNames={['List.Item']}>
                    <Stylish.View styleNames={['List.Item.Left']}>
                      <Stylish.View
                        styleNames={[
                          'Avatar.Jacket',
                          'Avatar.Jacket.Border',
                          'Border.Color.Grey1',
                        ]}>
                        <Stylish.Image
                          styleNames={['Avatar']}
                          source={require('./images/angularjs-logo.png')}
                        />
                      </Stylish.View>
                    </Stylish.View>
                    <Stylish.View styleNames={['List.Item.Body']}>
                      <Stylish.Text styleNames={['Bold']}>
                        AngularJS
                      </Stylish.Text>
                      <Stylish.Text
                        styleNames={['Small']}
                        numberOfLines={2}
                        ellipsizeMode="tail">
                        AngularJS is a toolset for building the framework most
                        suited to your application development.
                      </Stylish.Text>
                    </Stylish.View>
                  </Stylish.TouchableOpacity>

                  <Stylish.TouchableOpacity styleNames={['List.Item']}>
                    <Stylish.View styleNames={['List.Item.Left']}>
                      <Stylish.View
                        styleNames={[
                          'Avatar.Jacket',
                          'Avatar.Jacket.Square',
                          'Avatar.Jacket.Border',
                          'Border.Color.Grey1',
                        ]}>
                        <Stylish.Image
                          styleNames={['Avatar', 'Avatar.Square']}
                          source={require('./images/emberjs-logo.jpeg')}
                        />
                      </Stylish.View>
                    </Stylish.View>
                    <Stylish.View styleNames={['List.Item.Body']}>
                      <Stylish.Text styleNames={['Bold']}>EmberJS</Stylish.Text>
                      <Stylish.Text
                        styleNames={['Small']}
                        numberOfLines={2}
                        ellipsizeMode="tail">
                        Ember.js is a productive, battle-tested JavaScript
                        framework for building modern web applications.
                      </Stylish.Text>
                    </Stylish.View>
                  </Stylish.TouchableOpacity>

                  <Stylish.TouchableOpacity styleNames={['List.Item']}>
                    <Stylish.View styleNames={['List.Item.Left']}>
                      <Stylish.View
                        styleNames={[
                          'Avatar.Jacket',
                          'Avatar.Jacket.Border',
                          'Border.Color.Grey1',
                        ]}>
                        <Stylish.Image
                          styleNames={['Avatar']}
                          source={require('./images/reactjs-logo.png')}
                        />
                      </Stylish.View>
                    </Stylish.View>
                    <Stylish.View styleNames={['List.Item.Body']}>
                      <Stylish.Text styleNames={['Bold']}>ReactJS</Stylish.Text>
                      <Stylish.Text
                        styleNames={['Small']}
                        numberOfLines={2}
                        ellipsizeMode="tail">
                        A JavaScript library for building user interfaces. React
                        makes it painless to create interactive UIs.
                      </Stylish.Text>
                    </Stylish.View>
                  </Stylish.TouchableOpacity>

                  <Stylish.TouchableOpacity styleNames={['List.Item']}>
                    <Stylish.View styleNames={['List.Item.Left']}>
                      <Stylish.View
                        styleNames={[
                          'Avatar.Jacket',
                          'Avatar.Jacket.Square',
                          'Avatar.Jacket.Border',
                          'Border.Color.Grey1',
                        ]}>
                        <Stylish.Image
                          styleNames={['Avatar', 'Avatar.Square']}
                          source={require('./images/vuejs-logo.jpeg')}
                        />
                      </Stylish.View>
                    </Stylish.View>
                    <Stylish.View styleNames={['List.Item.Body']}>
                      <Stylish.Text styleNames={['Bold']}>VueJS</Stylish.Text>
                      <Stylish.Text
                        styleNames={['Small']}
                        numberOfLines={2}
                        ellipsizeMode="tail">
                        An approachable, performant and versatile framework for
                        building web user interfaces.
                      </Stylish.Text>
                    </Stylish.View>
                  </Stylish.TouchableOpacity>
                </Stylish.View>
              </Stylish.View>
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
          <Stylish.TouchableOpacity
            styleNames={['Button', 'BackgroundColor.Primary']}>
            <Stylish.Text styleNames={['Color.White', 'Button.Text']}>
              Submit
            </Stylish.Text>
          </Stylish.TouchableOpacity>
        </Stylish.View>
      </Stylish.View>
      <Stylish.SafeAreaView styleNames={['BackgroundColor.Primary1']} />
    </ThemeProvider>
  );
};

export default Home;
