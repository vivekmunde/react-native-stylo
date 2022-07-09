import { StyleProp, TextStyle } from 'react-native';
declare function useTextStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<TextStyle>;
export default useTextStyles;
