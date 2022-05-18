import { StyleProp } from 'react-native';
declare function useStyles<TStyleProp, TStyleName extends string>({ styleNamespace, styleNames, }: {
    styleNamespace?: string;
    styleNames?: TStyleName[];
}): StyleProp<TStyleProp>;
export default useStyles;
