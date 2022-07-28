import React from 'react';

export type TContext<TVariables, TStyles> = {
  variables?: TVariables;
  styles: TStyles;
};

export default React.createContext<TContext<Object, Object>>({
  variables: {},
  styles: {},
});
