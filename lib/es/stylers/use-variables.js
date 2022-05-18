import { useContext, useMemo } from 'react';
import ThemeContext from './theme-context';
function useVariables(names) {
    var _a;
    var themeContext = useContext(ThemeContext);
    var themeVariables = (_a = themeContext.variables) !== null && _a !== void 0 ? _a : {};
    var namesJoined = names.join('');
    var variables = useMemo(function () { return names.map(function (name) { return themeVariables[name]; }); }, [themeVariables, namesJoined]);
    return variables;
}
export default useVariables;
//# sourceMappingURL=use-variables.js.map