import React, { useState } from 'react';
import ThemeContext from './theme-context';
var ThemeProvider = function (_a) {
    var variables = _a.variables, styles = _a.styles, children = _a.children;
    var contextValue = useState({ variables: variables, styles: styles })[0];
    return (<ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>);
};
export default ThemeProvider;
//# sourceMappingURL=theme-provider.js.map