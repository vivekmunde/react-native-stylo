import React from 'react';
import { StyleProp } from 'react-native';

import { TStyleNamespace } from './types';
import useStyles from './use-styles';

type TProps<TStyleProp, TStyleName extends string> = {
  styleNamespace: TStyleNamespace;
  styleNames: TStyleName[];
  children: (style: StyleProp<TStyleProp>) => React.ReactElement | null;
};

const Styles = <TStyleProp, TStyleName extends string>({
  styleNamespace,
  styleNames,
  children,
}: TProps<TStyleProp, TStyleName>): React.ReactElement | null => {
  const style = useStyles<TStyleProp, TStyleName>({
    styleNamespace,
    styleNames,
  });
  return children(style);
};

export default Styles;
