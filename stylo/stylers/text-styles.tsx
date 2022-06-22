import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import useTextStyles from './use-text-styles';

type TProps<TStyleName extends string, TStyleNamespace extends string> = {
  styleNamespace?: TStyleNamespace;
  styleNames: TStyleName[];
  children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};

const TextStyles = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<TStyleName, TStyleNamespace>): React.ReactElement | null => {
  const style = useTextStyles<TStyleName, TStyleNamespace>(
    styleNames ?? [],
    styleNamespace,
  );
  return children(style);
};

export default TextStyles;
