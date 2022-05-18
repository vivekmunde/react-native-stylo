/// <reference types="react" />
import { StyleProp, TextStyle } from 'react-native';
import { TStylesProps } from '../stylers';
export declare type TIconProps<T extends string> = TStylesProps<T> & {
    name: string;
    size?: number | undefined;
    color?: string | undefined;
    style?: Omit<StyleProp<TextStyle>, 'color'>;
};
declare const AntDesign: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const Entypo: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const EvilIcons: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const FontAwesome: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const FontAwesome5: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const FontAwesome5Pro: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const Fontisto: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const Foundation: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const Ionicons: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const MaterialCommunityIcons: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const MaterialIcons: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const Octicons: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const SimpleLineIcons: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
declare const Zocial: <T extends string>({ styleNamespace, styleNames, style, ...props }: TIconProps<T>) => JSX.Element;
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
