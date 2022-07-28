import React, { useEffect, useRef, useState } from 'react';
import ThemeContext, { TContext } from './theme-context';

export type TProps<TVariables, TStyles> = TContext<TVariables, TStyles> & {
  children: React.ReactNode;
};

const ThemeProvider = <TVariables, TStyles>({ variables, styles, children }: TProps<TVariables, TStyles>) => {
  const hasMounted = useRef(false);
  const [contextValue, setContextValue] = useState<TContext<TVariables, TStyles>>({ variables, styles });

  useEffect(() => {
    if (hasMounted.current) {
      setContextValue({ variables, styles });
    } else {
      hasMounted.current = true;
    }
  }, [variables, styles]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
