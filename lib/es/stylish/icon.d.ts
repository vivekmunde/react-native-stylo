/// <reference types="react" />
import { StyleProp, TextStyle } from 'react-native';
import { TStylesProps } from './types';
export declare type TIconProps<TStyleName extends string, TStyleNamespace extends string> = TStylesProps<TStyleName, TStyleNamespace> & {
    name: string;
    size?: number | undefined;
    color?: string | undefined;
    style?: Omit<StyleProp<TextStyle>, 'color'>;
};
declare const AntDesign: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const Entypo: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const EvilIcons: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const FontAwesome: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const FontAwesome5: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const FontAwesome5Pro: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const Fontisto: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const Foundation: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const Ionicons: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const MaterialCommunityIcons: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const MaterialIcons: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const Octicons: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const SimpleLineIcons: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare const Zocial: <TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<TStyleName, TStyleNamespace>) => JSX.Element;
declare class Icon {
    static AntDesign: typeof AntDesign;
    static Entypo: typeof Entypo;
    static EvilIcons: typeof EvilIcons;
    static FontAwesome: typeof FontAwesome;
    static FontAwesome5: typeof FontAwesome5;
    static FontAwesome5Pro: typeof FontAwesome5Pro;
    static Fontisto: typeof Fontisto;
    static Foundation: typeof Foundation;
    static Ionicons: typeof Ionicons;
    static MaterialCommunityIcons: typeof MaterialCommunityIcons;
    static MaterialIcons: typeof MaterialIcons;
    static Octicons: typeof Octicons;
    static SimpleLineIcons: typeof SimpleLineIcons;
    static Zocial: typeof Zocial;
}
export default Icon;
