import React, { useRef } from 'react';
import {
  SafeAreaView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

import { useStyles } from '../../../stylo/index';
import {
  TTextStyle,
  TTouchableStyle,
  TViewStyle
} from '../../stylo/themes/types';

const UseStylesShowCase: React.FC = () => {
  const styles = useRef({
    screen: useStyles<ViewStyle, TViewStyle>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Screen', 'BackgroundColor.Body'],
    }),
    screenHeader: useStyles<ViewStyle, TViewStyle>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Screen.Header', 'Padding'],
    }),
    screenTitle: useStyles<TextStyle, TTextStyle>({
      styleNamespace: 'TextStyles',
      styleNames: [
        'Color.Primary',
        'H1',
        'Margin.Top.Small',
        'Margin.Bottom.Small',
      ],
    }),
    screenBody: useStyles<ViewStyle, TViewStyle>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Screen.Body', 'Padding'],
    }),
    card: useStyles<ViewStyle, TViewStyle>({
      styleNamespace: 'ViewStyles',
      styleNames: [
        'BackgroundColor.Alpha10',
        'Border.Radius',
        'Margin.Bottom.Large',
      ],
    }),
    cardHeader: useStyles<ViewStyle, TViewStyle>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Padding.Top', 'Padding.Left', 'Padding.Right'],
    }),
    cardBody: useStyles<ViewStyle, TViewStyle>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Padding'],
    }),
    cardFooter: useStyles<ViewStyle, TViewStyle>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Padding', 'Border.Top', 'Border.Color.Primary1'],
    }),
    cardTitle: useStyles<TextStyle, TTextStyle>({
      styleNamespace: 'TextStyles',
      styleNames: ['Large', 'Bold'],
    }),
    code: useStyles<TextStyle, TTextStyle>({
      styleNamespace: 'TextStyles',
      styleNames: ['Color.Grey8', 'Bold.Semi'],
    }),
    description: useStyles<TextStyle, TTextStyle>({
      styleNamespace: 'TextStyles',
      styleNames: ['Color.Grey9'],
    }),
    footerButton: useStyles<ViewStyle, TTouchableStyle>({
      styleNamespace: 'TouchableStyles',
      styleNames: ['Button', 'Border', 'Border.Color.Primary'],
    }),
    footerButtonText: useStyles<TextStyle, TTextStyle>({
      styleNamespace: 'TextStyles',
      styleNames: ['Color.Primary'],
    }),
  }).current;

  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>useStyles() hook</Text>
      </View>
      <View style={styles.screenBody}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Type definition</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.code}>
              {
                'function useStyles<TStyleProp, TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames }: { styleNamespace: TStyleNamespace; styleNames: TStyleName[]; }): StyleProp<TStyleProp>'
              }
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <Text style={styles.description}>
              useStyles() is main hook which is used by the Stylo library to
              read styles from theme. It accepts StyleNames & optional
              StyleNamespace as its arguments. It then reads the styles defined
              for those StyleNames under that StyleNamespace in the theme,
              combines these styles into one & returns the final style.
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.footerButton}>
              <Text style={styles.footerButtonText}>Read more ...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UseStylesShowCase;
