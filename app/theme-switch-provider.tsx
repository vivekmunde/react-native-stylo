import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '../stylo';
import * as darkTheme from './stylo/themes/dark';
import * as lightTheme from './stylo/themes/light';

export type TThemeSwitchContext = {
  onSwitchTheme: (theme: 'Light' | 'Dark') => void;
  onGetTheme: () => 'Light' | 'Dark';
};

export const ThemeSwitchContext = React.createContext<TThemeSwitchContext>({
  onSwitchTheme: () => null,
  onGetTheme: () => 'Light',
});

export const ThemeSwitchProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<'Light' | 'Dark'>('Light');

  const onSwitchTheme = (changedTheme: 'Light' | 'Dark') => {
    setTheme(changedTheme);
  };

  const onGetTheme = () => theme;

  return (
    <ThemeSwitchContext.Provider value={{
      onSwitchTheme,
      onGetTheme,
    }}>
      <ThemeProvider
        variables={theme === 'Dark' ? darkTheme.variables : lightTheme.variables}
        styles={theme === 'Dark' ? darkTheme.styles : lightTheme.styles}>
        <StatusBar barStyle={theme === 'Dark' ? 'light-content' : 'dark-content'} />
        {children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
};
