import {
  useScrollViewStyles as rnsUseScrollViewStyles,
  useScrollViewContentContainerStyles as rnsUseScrollViewContentContainerStyles,
} from 'react-native-stylo';
import {
  TScrollViewStyle,
  TScrollViewContentContainerStyle,
} from '../themes/types';

export const useScrollViewStyles = (
  styleNames: TScrollViewStyle[] | undefined,
  styleNamespace?: string,
) => rnsUseScrollViewStyles<TScrollViewStyle>(styleNames, styleNamespace);

export const useScrollViewContentContainerStyles = (
  styleNames: TScrollViewContentContainerStyle[] | undefined,
  styleNamespace?: string,
) =>
  rnsUseScrollViewContentContainerStyles<TScrollViewContentContainerStyle>(
    styleNames,
    styleNamespace,
  );
