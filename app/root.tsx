import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from '../stylo';
import C from './screens/showcase/screen';
import { styles, variables } from './stylo/themes/default';

const Root = () => {
  return (
    <ThemeProvider variables={variables} styles={styles}>
      <StatusBar barStyle="dark-content" />
      <C />
    </ThemeProvider>
  );
};

export default Root;
