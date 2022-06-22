import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import useTextInputStyles from './use-text-input-styles';

type TProps<TStyleName extends string, TStyleNamespace extends string> = {
  styleNamespace?: TStyleNamespace;
  styleNames: TStyleName[];
  children: (style: StyleProp<TextStyle>) => React.ReactElement | null;
};

const TextInputStyles = <
  TStyleName extends string,
  TStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  children,
}: TProps<TStyleName, TStyleNamespace>): React.ReactElement | null => {
  const style = useTextInputStyles<TStyleName, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );
  return children(style);
};

export default TextInputStyles;
