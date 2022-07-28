import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '../stylo';
import { styles, variables } from './stylo/themes/default';
import { TThemeFlavour, TVariables } from './stylo/themes/types';

export type TThemeSwitchContext = {
  onSwitchTheme: (theme: TThemeFlavour) => void;
  onGetTheme: () => TThemeFlavour;
};

export const ThemeSwitchContext = React.createContext<TThemeSwitchContext>({
  onSwitchTheme: () => null,
  onGetTheme: () => 'Light',
});

export const ThemeSwitchProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<TThemeFlavour>('Light');

  const onSwitchTheme = (changedTheme: TThemeFlavour) => {
    setTheme(changedTheme);
  };

  const onGetTheme = () => theme;

  return (
    <ThemeSwitchContext.Provider value={{
      onSwitchTheme,
      onGetTheme,
    }}>
      <ThemeProvider<TVariables>
        variables={theme === 'Dark' ? variables.dark : variables.light}
        styles={theme === 'Dark' ? styles.dark : styles.light}>
        <StatusBar barStyle={theme === 'Dark' ? 'light-content' : 'dark-content'} />
        {children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
};
