import { useTouchableStyles as useStyloTouchableStyles } from 'react-native-stylo';
import { TViewStyle, TStyleNamespace } from '../themes/types';

const useViewStyles = (
  styleNames: TViewStyle[],
  styleNamespace?: TStyleNamespace,
) =>
  useStyloTouchableStyles<TViewStyle, TStyleNamespace>(
    styleNames,
    styleNamespace,
  );

export default useViewStyles;
