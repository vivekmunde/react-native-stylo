import { StyleProp } from 'react-native';
import { TStyleNamespace } from './types';
declare function useStyles<TStyleProp, TStyleName extends string>({ styleNamespace, styleNames, }: {
    styleNamespace: TStyleNamespace;
    styleNames: TStyleName[];
}): StyleProp<TStyleProp>;
export default useStyles;
