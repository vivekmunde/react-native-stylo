import { useContext, useMemo } from 'react';
import { StyleProp } from 'react-native';
import ThemeContext from './theme-context';

function useStyles<TStyleProp, TStyleName extends string>({
  styleNamespace,
  styleNames,
}: {
  styleNamespace?: string;
  styleNames?: TStyleName[];
}): StyleProp<TStyleProp> {
  const themeContext = useContext(ThemeContext);
  const styleNamesJoined = styleNames?.join('');

  const style = useMemo(() => {
    const styles = styleNamespace
      ? themeContext.styles[styleNamespace]
      : themeContext.styles;

    return (styleNames ?? []).reduce(
      (acc, styleName) => ({
        ...acc,
        ...(styles ?? {})[styleName],
      }),
      { ...(styles?.Default ?? {}) },
    );
  }, [themeContext.styles, styleNamespace, styleNamesJoined]);

  return style as StyleProp<TStyleProp>;
}

export default useStyles;
