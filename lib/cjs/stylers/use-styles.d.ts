import { StyleProp } from 'react-native';
declare function useStyles<TStyleProp, TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, }: {
    styleNamespace: TStyleNamespace;
    styleNames: TStyleName[];
}): StyleProp<TStyleProp>;
export default useStyles;
