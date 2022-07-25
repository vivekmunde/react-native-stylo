import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ThemeSwitch from '../components/theme-switch';
import { TAppStackParamList } from '../navigation';
import Stylish from '../stylo/stylish';

type TShowcaseRoute = {
  title: string;
  routeName: keyof TAppStackParamList;
};

const styloThemeGenericStylesRoutes: TShowcaseRoute[] = [
  { title: 'BackgroundColor', routeName: 'StyloThemeBackgroundColor' },
  { title: 'Border', routeName: 'StyloThemeBorder' },
  { title: 'Flex', routeName: 'StyloThemeFlex' },
  { title: 'FontColor', routeName: 'StyloThemeFontColor' },
  { title: 'Margin', routeName: 'StyloThemeMargin' },
  { title: 'Padding', routeName: 'StyloThemePadding' },
];

const styloThemeComponentStylesRoutes: TShowcaseRoute[] = [
  { title: 'Icon', routeName: 'StyloThemeIcon' },
  { title: 'Image', routeName: 'StyloThemeImage' },
  { title: 'ImageBackground', routeName: 'StyloThemeImageBackground' },
  { title: 'Pressable', routeName: 'StyloThemePressable' },
  { title: 'ScrollView', routeName: 'StyloThemeScrollView' },
  { title: 'Text', routeName: 'StyloThemeText' },
  { title: 'TextInput', routeName: 'StyloThemeTextInput' },
  { title: 'TouchableOpacity', routeName: 'StyloThemeTouchableOpacity' },
  { title: 'TouchableHighlight', routeName: 'StyloThemeTouchableHighlight' },
  { title: 'View', routeName: 'StyloThemeView' },
];

const styloThemeAssortedStylesRoutes: TShowcaseRoute[] = [
  { title: 'Avatar', routeName: 'StyloThemeAvatar' },
  { title: 'Badge', routeName: 'StyloThemeBadge' },
  { title: 'Button', routeName: 'StyloThemeButton' },
  { title: 'Form', routeName: 'StyloThemeForm' },
  { title: 'Horizontal', routeName: 'StyloThemeHorizontal' },
  { title: 'List', routeName: 'StyloThemeList' },
  { title: 'Screen', routeName: 'StyloThemeScreen' },
];

const otherShowcaseRoutes: TShowcaseRoute[] = [
  { title: 'Core concept: Stylish components', routeName: 'CoreConceptStylishComponents' },
  { title: 'Usage: Stylers', routeName: 'UsageStylers' },
  { title: 'Usage: Stylish', routeName: 'UsageStylish' },
  { title: 'Usage: useVariables()', routeName: 'UsageUseVariables' },
  { title: 'useStyles()', routeName: 'UseStyles' },
];

const ShowcaseList: React.FC<{ list: TShowcaseRoute[] }> = ({ list }) => {
  const navigation = useNavigation<NavigationProp<TAppStackParamList>>();

  return (
    <Stylish.View styleNames={['List', 'Border.Radius', 'BackgroundColor.Alpha10', 'Margin.Bottom.Large']}>
      {list.map((it, index) => (
        <Stylish.TouchableOpacity
          key={it.routeName}
          styleNames={index > 0 ? ['List.Item', 'Border.Top'] : ['List.Item']}
          onPress={() => {
            navigation.navigate(it.routeName);
          }}>
          <Stylish.View styleNames={['List.Item.Body']}>
            <Stylish.Text>{it.title}</Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['List.Item.Right']}>
            <Stylish.Icon.AntDesign name="right" styleNames={['Color.Secondary']} />
          </Stylish.View>
        </Stylish.TouchableOpacity>
      ))}
    </Stylish.View>
  );
};

const Home = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const styles = useRef(
    StyleSheet.create({
      safeAreaHeader: { height: safeAreaInsets.top },
      safeAreaFooter: { height: safeAreaInsets.bottom },
    })
  ).current;

  return (
    <Stylish.View styleNames={['Screen', 'BackgroundColor.Body']}>
      <Stylish.ScrollView styleNames={['Flex.1']}>
        <Stylish.View style={styles.safeAreaHeader} />
        <Stylish.View styleNames={['Screen.Header', 'Padding']}>
          <Stylish.View styleNames={['Screen.Header.Body']}>
            <Stylish.Text styleNames={['H1']}>
              Showcase
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Screen.Header.Right']}>
            <ThemeSwitch />
          </Stylish.View>
        </Stylish.View>
        <Stylish.View styleNames={['Screen.Body', 'Padding']}>
          <Stylish.Text styleNames={['Bold', 'Margin.Bottom']}>Generic styles</Stylish.Text>
          <ShowcaseList list={styloThemeGenericStylesRoutes} />
          <Stylish.Text styleNames={['Bold', 'Margin.Bottom']}>Component styles</Stylish.Text>
          <ShowcaseList list={styloThemeComponentStylesRoutes} />
          <Stylish.Text styleNames={['Bold', 'Margin.Bottom']}>Assorted styles</Stylish.Text>
          <ShowcaseList list={styloThemeAssortedStylesRoutes} />
          <Stylish.Text styleNames={['Bold', 'Margin.Bottom']}>Other</Stylish.Text>
          <ShowcaseList list={otherShowcaseRoutes} />
        </Stylish.View>
        <Stylish.View style={styles.safeAreaFooter} />
      </Stylish.ScrollView>
    </Stylish.View>
  );
};

export default Home;
