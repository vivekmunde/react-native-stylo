import { TextStyle, StyleProp } from 'react-native';
declare function useTextStyles<T extends string>(styleNames: T[] | undefined, styleNamespace?: string): StyleProp<TextStyle>;
export default useTextStyles;
