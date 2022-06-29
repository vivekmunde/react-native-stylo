import {
  useScrollViewStyles as useStyloScrollViewStyles,
  useScrollViewContentContainerStyles as useStyloScrollViewContentContainerStyles,
} from '../../../stylo';
import {
  TScrollViewStyle,
  TScrollViewContentContainerStyle,
  TStyleNamespace,
} from '../themes/types';

export const useScrollViewStyles = (
  styleNames: TScrollViewStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloScrollViewStyles<TScrollViewStyle, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );

export const useScrollViewContentContainerStyles = (
  styleNames: TScrollViewContentContainerStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloScrollViewContentContainerStyles<
    TScrollViewContentContainerStyle,
    TStyleNamespace
  >(styleNames, styleNamespace);
