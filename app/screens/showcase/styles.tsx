import React from 'react';
import { SafeAreaView, Text, TextStyle, View, ViewStyle } from 'react-native';

import { Styles } from '../../../stylo/index';
import { TTextStyle, TViewStyle } from '../../stylo/themes/types';

const StylesShowCase: React.FC = () => (
  <Styles<ViewStyle, TViewStyle>
    styleNamespace="ViewStyles"
    styleNames={['Screen', 'BackgroundColor.Primary1']}>
    {screenStyle => (
      <View style={screenStyle}>
        <SafeAreaView />
        <Styles<ViewStyle, TViewStyle>
          styleNamespace="ViewStyles"
          styleNames={['Screen.Header', 'Padding']}>
          {screenHeaderStyle => (
            <React.Fragment>
              <View style={screenHeaderStyle}>
                <Styles<TextStyle, TTextStyle>
                  styleNamespace="TextStyles"
                  styleNames={[
                    'Color.Primary',
                    'H1',
                    'Margin.Top.Small',
                    'Margin.Bottom.Small',
                  ]}>
                  {screenTitleStyle => (
                    <Text style={screenTitleStyle}>{'<Styles />'}</Text>
                  )}
                </Styles>
              </View>
              <Styles<ViewStyle, TViewStyle>
                styleNamespace="ViewStyles"
                styleNames={['Screen.Body', 'Padding']}>
                {screenBodyStyle => (
                  <View style={screenBodyStyle}>
                    <Styles<ViewStyle, TViewStyle>
                      styleNamespace="ViewStyles"
                      styleNames={[
                        'BackgroundColor.White',
                        'Border.Radius',
                        'Margin.Bottom.Large',
                      ]}>
                      {cardStyle => (
                        <View style={cardStyle}>
                          <Styles<ViewStyle, TViewStyle>
                            styleNamespace="ViewStyles"
                            styleNames={[
                              'Padding.Top',
                              'Padding.Left',
                              'Padding.Right',
                            ]}>
                            {cardHeaderStyle => (
                              <View style={cardHeaderStyle}>
                                <Styles<TextStyle, TTextStyle>
                                  styleNamespace="TextStyles"
                                  styleNames={['Large', 'Bold']}>
                                  {cardTitleStyle => (
                                    <Text style={cardTitleStyle}>
                                      Type definition
                                    </Text>
                                  )}
                                </Styles>
                              </View>
                            )}
                          </Styles>
                          <Styles<ViewStyle, TViewStyle>
                            styleNamespace="ViewStyles"
                            styleNames={['Padding']}>
                            {cardBodyStyle => (
                              <View style={cardBodyStyle}>
                                <Styles<TextStyle, TTextStyle>
                                  styleNamespace="TextStyles"
                                  styleNames={['Color.Grey8', 'Bold.Semi']}>
                                  {codeStyle => (
                                    <Text style={codeStyle}>
                                      {
                                        'type TProps<TStyleProp, TStyleName extends string, TStyleNamespace extends string> = { styleNamespace: TStyleNamespace; styleNames: TStyleName[]; children: (style: StyleProp<TStyleProp>) => React.ReactNode; };'
                                      }
                                    </Text>
                                  )}
                                </Styles>
                              </View>
                            )}
                          </Styles>
                        </View>
                      )}
                    </Styles>
                  </View>
                )}
              </Styles>
            </React.Fragment>
          )}
        </Styles>
      </View>
    )}
  </Styles>
);

export default StylesShowCase;
