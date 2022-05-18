import { useContext } from 'react';
import { StyleProp } from 'react-native';
import ThemeContext from './theme-context';

function useStyle<
  TStyleNamespace extends string,
  TStyleName extends string,
  TStyleProp,
>(
  styleNamespace: TStyleNamespace,
  styleName: TStyleName,
): StyleProp<TStyleProp> | undefined | null {
  const themeContext = useContext(ThemeContext);
  const styles = styleNamespace
    ? themeContext.styles[styleNamespace]
    : themeContext.styles;

  const style = styles[styleName];

  return style ? (style as StyleProp<TStyleProp>) : undefined;
}

export default useStyle;
