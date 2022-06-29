import React, { useState } from 'react';

import ThemeContext, { TContext } from './theme-context';

type TProps = TContext;

const ThemeProvider: React.FC<TProps> = ({ variables, styles, children }) => {
  const [contextValue] = useState<TContext>({ variables, styles });

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
