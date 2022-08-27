import React, { useEffect, useRef, useState } from 'react';
import ThemeContext, { TContext } from './theme-context';

export type TProps = TContext & { children: React.ReactNode };

const ThemeProvider: React.FC<TProps> = ({ variables, styles, children }) => {
  const hasMounted = useRef(false);
  const [contextValue, setContextValue] = useState<TContext>({ variables, styles });

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
