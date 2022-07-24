import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/home';
import StyloThemeAvatarScreen from './screens/showcase/avatar';
import StyloThemeBackgroundColorScreen from './screens/showcase/background-color';
import StyloThemeBadgeScreen from './screens/showcase/badge';
import StyloThemeBorderScreen from './screens/showcase/border';
import StyloThemeButtonScreen from './screens/showcase/button';
import CoreConceptStylishComponentsScreen from './screens/showcase/core-concept-stylish-components';
import StyloThemeFlexScreen from './screens/showcase/flex';
import StyloThemeFontColorScreen from './screens/showcase/font-color';
import StyloThemeFormScreen from './screens/showcase/form';
import StyloThemeHorizontalScreen from './screens/showcase/horizontal';
import StyloThemeIconScreen from './screens/showcase/icon';
import StyloThemeImageScreen from './screens/showcase/image';
import StyloThemeImageBackgroundScreen from './screens/showcase/image-background';
import StyloThemeListScreen from './screens/showcase/list';
import StyloThemeMarginScreen from './screens/showcase/margin';
import StyloThemePaddingScreen from './screens/showcase/padding';
import StyloThemeScreenScreen from './screens/showcase/screen';
import StyloThemeScrollViewScreen from './screens/showcase/scroll-view';
import StyloThemeTextScreen from './screens/showcase/text';
import StyloThemeTextInputScreen from './screens/showcase/text-input';
import StyloThemeTouchableScreen from './screens/showcase/touchable';
import UsageStylersScreen from './screens/showcase/usage-stylers';
import UsageStylishScreen from './screens/showcase/usage-stylish-components';
import UsageUseVariablesScreen from './screens/showcase/usage-use-variables';
import UseStylesScreen from './screens/showcase/use-styles';
import StyloThemeViewScreen from './screens/showcase/view';

export type TAppStackParamList = {
  Home: undefined;

  StyloThemeBackgroundColor: undefined;
  StyloThemeBorder: undefined;
  StyloThemeFlex: undefined;
  StyloThemeFontColor: undefined;
  StyloThemeMargin: undefined;
  StyloThemePadding: undefined;

  StyloThemeIcon: undefined;
  StyloThemeImage: undefined;
  StyloThemeImageBackground: undefined;
  StyloThemePressable: undefined;
  StyloThemeScrollView: undefined;
  StyloThemeText: undefined;
  StyloThemeTextInput: undefined;
  StyloThemeTouchableOpacity: undefined;
  StyloThemeTouchableHighlight: undefined;
  StyloThemeView: undefined;

  StyloThemeAvatar: undefined;
  StyloThemeBadge: undefined;
  StyloThemeButton: undefined;
  StyloThemeForm: undefined;
  StyloThemeHorizontal: undefined;
  StyloThemeList: undefined;
  StyloThemeScreen: undefined;

  CoreConceptStylishComponents: undefined;
  UsageStylers: undefined;
  UsageStylish: undefined;
  UsageUseVariables: undefined;
  UseStyles: undefined;
};

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="StyloThemeBackgroundColor" component={StyloThemeBackgroundColorScreen} />
      <Stack.Screen name="StyloThemeBorder" component={StyloThemeBorderScreen} />
      <Stack.Screen name="StyloThemeFlex" component={StyloThemeFlexScreen} />
      <Stack.Screen name="StyloThemeFontColor" component={StyloThemeFontColorScreen} />
      <Stack.Screen name="StyloThemeMargin" component={StyloThemeMarginScreen} />
      <Stack.Screen name="StyloThemePadding" component={StyloThemePaddingScreen} />

      <Stack.Screen name="StyloThemeIcon" component={StyloThemeIconScreen} />
      <Stack.Screen name="StyloThemeImage" component={StyloThemeImageScreen} />
      <Stack.Screen name="StyloThemeImageBackground" component={StyloThemeImageBackgroundScreen} />
      <Stack.Screen name="StyloThemePressable" component={StyloThemeTouchableScreen} />
      <Stack.Screen name="StyloThemeScrollView" component={StyloThemeScrollViewScreen} />
      <Stack.Screen name="StyloThemeText" component={StyloThemeTextScreen} />
      <Stack.Screen name="StyloThemeTextInput" component={StyloThemeTextInputScreen} />
      <Stack.Screen name="StyloThemeTouchableOpacity" component={StyloThemeTouchableScreen} />
      <Stack.Screen name="StyloThemeTouchableHighlight" component={StyloThemeTouchableScreen} />
      <Stack.Screen name="StyloThemeView" component={StyloThemeViewScreen} />

      <Stack.Screen name="StyloThemeAvatar" component={StyloThemeAvatarScreen} />
      <Stack.Screen name="StyloThemeBadge" component={StyloThemeBadgeScreen} />
      <Stack.Screen name="StyloThemeButton" component={StyloThemeButtonScreen} />
      <Stack.Screen name="StyloThemeForm" component={StyloThemeFormScreen} />
      <Stack.Screen name="StyloThemeHorizontal" component={StyloThemeHorizontalScreen} />
      <Stack.Screen name="StyloThemeList" component={StyloThemeListScreen} />
      <Stack.Screen name="StyloThemeScreen" component={StyloThemeScreenScreen} />

      <Stack.Screen name="CoreConceptStylishComponents" component={CoreConceptStylishComponentsScreen} />
      <Stack.Screen name="UsageStylers" component={UsageStylersScreen} />
      <Stack.Screen name="UsageUseVariables" component={UsageUseVariablesScreen} />
      <Stack.Screen name="UsageStylish" component={UsageStylishScreen} />
      <Stack.Screen name="UseStyles" component={UseStylesScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
