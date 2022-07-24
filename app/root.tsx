import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '../stylo';
import Navigation from './navigation';
import { styles, variables } from './stylo/themes/default';

const Root = () => {
  return (
    <ThemeProvider variables={variables} styles={styles}>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </ThemeProvider>
  );
};

export default Root;
