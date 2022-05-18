import React from 'react';

export type TContext = {
  variables?: {
    [name: string]: string | number;
  };
  styles: {
    [name: string]: {
      [name: string]: object;
    };
  };
};

export default React.createContext<TContext>({
  variables: {},
  styles: {},
});
