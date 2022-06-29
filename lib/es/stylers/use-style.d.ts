import { StyleProp } from 'react-native';
declare function useStyle<TStyleProp, TStyleName extends string, TStyleNamespace extends string>(styleNamespace: TStyleNamespace, styleName: TStyleName): StyleProp<TStyleProp> | undefined | null;
export default useStyle;
