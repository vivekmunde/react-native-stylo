import { useSafeAreaViewStyles as useStyloSafeAreaViewStyles } from 'react-native-stylo';
import { TSafeAreaViewStyle, TStyleNamespace } from '../themes/types';

const useSafeAreaViewStyles = (
  styleNames: TSafeAreaViewStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloSafeAreaViewStyles<TSafeAreaViewStyle, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );

export default useSafeAreaViewStyles;
