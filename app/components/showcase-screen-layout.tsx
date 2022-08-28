import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Stylish from '../stylo/stylish';
import DelayedMount from './delayed-mount';
import ThemeSwitch from './theme-switch';

export const Screen: React.FC<{ transparent?: boolean }> = ({ children, transparent }) => {
  const safeAreaInsets = useSafeAreaInsets();
  const styles = useRef(
    StyleSheet.create({
      safeAreaHeader: { height: safeAreaInsets.top },
    })
  ).current;

  return (
    <Stylish.View styleNames={['Screen']} style={transparent ? { backgroundColor: 'transparent' } : {}}>
      <Stylish.View style={styles.safeAreaHeader} />
      {children}
    </Stylish.View>
  );
};

export const ScreenHeader: React.FC<{
  title: string;
  onNavigateBack?: () => void;
}> = ({ title, onNavigateBack }) => {
  const navigation = useNavigation();

  const navigateBack = () => {
    if (onNavigateBack) {
      onNavigateBack();
    } else {
      navigation.goBack();
    }
  }

  return (
    <Stylish.View styleNames={['Screen.Header']}>
      <Stylish.View styleNames={['Screen.Header.Left', 'Padding']}>
        <Stylish.TouchableOpacity
          styleNames={['Button', 'Button.Circle', 'BackgroundColor.Alpha8']}
          onPress={() => navigateBack()}>
          <Stylish.Icon.AntDesign name="left" styleNames={['Button.Circle.Icon']} />
        </Stylish.TouchableOpacity>
      </Stylish.View>
      <Stylish.View styleNames={['Screen.Header.Body', 'Padding.Top', 'Padding.Bottom', 'Padding.Right']}>
        <Stylish.Text styleNames={['Bold.Semi', 'Large']}>
          {title}
        </Stylish.Text>
      </Stylish.View>
      <Stylish.View styleNames={['Screen.Header.Right', 'Padding.Right']}>
        <ThemeSwitch />
      </Stylish.View>
    </Stylish.View>
  );
};

export const ScreenBody: React.FC = ({ children }) => {
  const safeAreaInsets = useSafeAreaInsets();
  const styles = useRef(
    StyleSheet.create({
      safeAreaFooter: { height: safeAreaInsets.bottom },
    })
  ).current;

  return (
    <DelayedMount>
      <Stylish.ScrollView styleNames={['Flex.1']}>
        <Stylish.View styleNames={['Screen.Body', 'Padding']}>
          {children}
        </Stylish.View>
        <Stylish.View style={styles.safeAreaFooter} />
      </Stylish.ScrollView>
    </DelayedMount>
  );
};
