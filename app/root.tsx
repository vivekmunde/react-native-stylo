import 'react-native-gesture-handler';

import React from 'react';
import Navigation from './navigation';
import { ThemeSwitchProvider } from './theme-switch-provider';

const Root = () => {
  return (
    <ThemeSwitchProvider>
      <Navigation />
    </ThemeSwitchProvider>
  );
};

export default Root;
