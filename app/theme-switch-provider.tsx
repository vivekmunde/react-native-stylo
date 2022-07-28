import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '../stylo';
import { styles, variables } from './stylo/themes/default';

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
        variables={theme === 'Dark' ? variables.dark : variables.light}
        styles={theme === 'Dark' ? styles.dark : styles.light}>
        <StatusBar barStyle={theme === 'Dark' ? 'light-content' : 'dark-content'} />
        {children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
};
