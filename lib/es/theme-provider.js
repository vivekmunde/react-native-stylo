import React, { useEffect, useRef, useState } from 'react';
import ThemeContext from './theme-context';
var ThemeProvider = function (_a) {
    var variables = _a.variables, styles = _a.styles, children = _a.children;
    var hasMounted = useRef(false);
    var _b = useState({ variables: variables, styles: styles }), contextValue = _b[0], setContextValue = _b[1];
    useEffect(function () {
        if (hasMounted.current) {
            setContextValue({ variables: variables, styles: styles });
        }
        else {
            hasMounted.current = true;
        }
    }, [variables, styles]);
    return (<ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>);
};
export default ThemeProvider;
//# sourceMappingURL=theme-provider.js.map