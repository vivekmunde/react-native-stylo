import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import RNVIconAntDesign from 'react-native-vector-icons/AntDesign';
import RNVIconEntypo from 'react-native-vector-icons/Entypo';
import RNVIconEvilIcons from 'react-native-vector-icons/EvilIcons';
import RNVIconFontAwesome from 'react-native-vector-icons/FontAwesome';
import RNVIconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RNVIconFontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import RNVIconFontisto from 'react-native-vector-icons/Fontisto';
import RNVIconFoundation from 'react-native-vector-icons/Foundation';
import RNVIconIonicons from 'react-native-vector-icons/Ionicons';
import RNVIconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNVIconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNVIconOcticons from 'react-native-vector-icons/Octicons';
import RNVIconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import RNVIconZocial from 'react-native-vector-icons/Zocial';
import { TStylesProps, useIconStyles } from '../stylers';

export type TIconProps<T extends string> = TStylesProps<T> & {
  name: string;
  size?: number | undefined;
  color?: string | undefined;
  style?: Omit<StyleProp<TextStyle>, 'color'>;
};

const defaultStyleNamespace = 'IconStyles';

const AntDesign = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconAntDesign {...props} style={[textStyle, style]} />;
};

const Entypo = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconEntypo {...props} style={[textStyle, style]} />;
};

const EvilIcons = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconEvilIcons {...props} style={[textStyle, style]} />;
};

const FontAwesome = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconFontAwesome {...props} style={[textStyle, style]} />;
};

const FontAwesome5 = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconFontAwesome5 {...props} style={[textStyle, style]} />;
};

const FontAwesome5Pro = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconFontAwesome5Pro {...props} style={[textStyle, style]} />;
};

const Fontisto = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconFontisto {...props} style={[textStyle, style]} />;
};

const Foundation = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconFoundation {...props} style={[textStyle, style]} />;
};

const Ionicons = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconIonicons {...props} style={[textStyle, style]} />;
};

const MaterialCommunityIcons = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return (
    <RNVIconMaterialCommunityIcons {...props} style={[textStyle, style]} />
  );
};

const MaterialIcons = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconMaterialIcons {...props} style={[textStyle, style]} />;
};

const Octicons = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconOcticons {...props} style={[textStyle, style]} />;
};

const SimpleLineIcons = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconSimpleLineIcons {...props} style={[textStyle, style]} />;
};

const Zocial = <T extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TIconProps<T>) => {
  const textStyle = useIconStyles<T>(
    styleNames,
    styleNamespace ?? defaultStyleNamespace,
  );
  return <RNVIconZocial {...props} style={[textStyle, style]} />;
};

class Icon {
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

Icon.AntDesign = AntDesign;
Icon.Entypo = Entypo;
Icon.EvilIcons = EvilIcons;
Icon.FontAwesome = FontAwesome;
Icon.FontAwesome5 = FontAwesome5;
Icon.FontAwesome5Pro = FontAwesome5Pro;
Icon.Fontisto = Fontisto;
Icon.Foundation = Foundation;
Icon.Ionicons = Ionicons;
Icon.MaterialCommunityIcons = MaterialCommunityIcons;
Icon.MaterialIcons = MaterialIcons;
Icon.Octicons = Octicons;
Icon.SimpleLineIcons = SimpleLineIcons;
Icon.Zocial = Zocial;

export default Icon;
