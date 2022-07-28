import React, { useEffect, useRef, useState } from 'react';
import ThemeContext, { TContext } from './theme-context';

export type TProps<TVariables> = TContext<TVariables> & {
  children: React.ReactNode;
};

const ThemeProvider = <TVariables,>({ variables, styles, children }: TProps<TVariables>) => {
  const hasMounted = useRef(false);
  const [contextValue, setContextValue] = useState<TContext<TVariables>>({ variables, styles });

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
