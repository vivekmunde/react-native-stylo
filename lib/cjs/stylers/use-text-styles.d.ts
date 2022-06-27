import { StyleProp, TextStyle } from 'react-native';
declare function useTextStyles<TStyleName extends string, TStyleNamespace extends string>(styleNames: TStyleName[], styleNamespace?: TStyleNamespace): StyleProp<TextStyle>;
export default useTextStyles;
