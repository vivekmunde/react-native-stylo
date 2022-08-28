import React, { useContext } from 'react';
import { StyleSheet, Switch } from 'react-native';
import { useVariables } from '../stylo/stylers';
import { Text, View } from '../stylo/stylish';
import { ThemeSwitchContext } from '../theme-switch-provider';

const style = StyleSheet.create({
  switch: { transform: [{ scaleX: .75 }, { scaleY: .75 }] },
});

const ThemeSwitch: React.FC = () => {
  const [colorSuccess, colorGrey1] = useVariables(['Color.Success4', 'Color.Grey1']);
  const { onSwitchTheme, onGetTheme } = useContext(ThemeSwitchContext);

  const theme = onGetTheme();

  return (
    <View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>
      <Switch
        style={style.switch}
        onChange={() => {
          onSwitchTheme(theme === 'Dark' ? 'Light' : 'Dark');
        }}
        trackColor={{ false: colorGrey1.toString(), true: colorSuccess.toString() }}
        value={theme === 'Dark'} />
      <Text>Dark</Text>
    </View>
  );
};

export default ThemeSwitch;
