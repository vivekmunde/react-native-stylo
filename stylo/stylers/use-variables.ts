import { useContext, useMemo } from 'react';

import ThemeContext from '../theme-context';

function useVariables<TVariable extends string>(
  names: TVariable[],
): (string | number)[] {
  const themeContext = useContext(ThemeContext);
  const themeVariables = themeContext.variables ?? {};
  const namesJoined = names.join('');
  const variables = useMemo(
    () => names.map(name => themeVariables[name]),
    [themeVariables, namesJoined],
  );
  return variables;
}

export default useVariables;
