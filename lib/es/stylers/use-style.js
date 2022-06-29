import { useContext } from 'react';
import ThemeContext from '../theme-context';
function useStyle(styleNamespace, styleName) {
    var themeContext = useContext(ThemeContext);
    var styles = styleNamespace
        ? themeContext.styles[styleNamespace]
        : themeContext.styles;
    var style = styles[styleName];
    return style ? style : undefined;
}
export default useStyle;
//# sourceMappingURL=use-style.js.map