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

import { useIconStyles } from '../stylers';
import { TStylesProps } from './types';

export type TIconProps<TStyleName extends string> = TStylesProps<TStyleName> & {
  name: string;
  size?: number | undefined;
  color?: string | undefined;
  style?: Omit<StyleProp<TextStyle>, 'color'>;
};

const AntDesign = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconAntDesign {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const Entypo = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconEntypo {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const EvilIcons = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconEvilIcons {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const FontAwesome = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconFontAwesome {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const FontAwesome5 = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconFontAwesome5 {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const FontAwesome5Pro = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconFontAwesome5Pro {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const Fontisto = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconFontisto {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const Foundation = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconFoundation {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const Ionicons = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconIonicons {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const MaterialCommunityIcons = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return (
    <RNVIconMaterialCommunityIcons {...props} style={style ? [iconStyle, style] : iconStyle} />
  );
};

const MaterialIcons = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconMaterialIcons {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const Octicons = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconOcticons {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const SimpleLineIcons = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconSimpleLineIcons {...props} style={style ? [iconStyle, style] : iconStyle} />;
};

const Zocial = <TStyleName extends string>({
  styleNames,
  style,
  ...props
}: TIconProps<TStyleName>) => {
  const iconStyle = useIconStyles<TStyleName>(styleNames ?? []);
  return <RNVIconZocial {...props} style={style ? [iconStyle, style] : iconStyle} />;
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
