import { ViewStyle, StyleProp } from 'react-native';
declare function useViewStyles<T extends string>(styleNames: T[] | undefined, styleNamespace?: string): StyleProp<ViewStyle>;
export default useViewStyles;
