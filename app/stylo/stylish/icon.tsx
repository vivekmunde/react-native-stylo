/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.5.0                                   */
/* -------------------------------------------------------------------------------- */

import React from 'react';

import { Icon as StyloIcon, TIconProps } from '../../../stylo';
import { TIconStyle } from '../themes/types';

const AntDesign: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.AntDesign {...props} />
);
const Entypo: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.Entypo {...props} />
);
const EvilIcons: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.EvilIcons {...props} />
);
const FontAwesome: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.FontAwesome {...props} />
);
const FontAwesome5: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.FontAwesome5 {...props} />
);
const FontAwesome5Pro: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.FontAwesome5Pro {...props} />
);
const Fontisto: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.Fontisto {...props} />
);
const Foundation: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.Foundation {...props} />
);
const Ionicons: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.Ionicons {...props} />
);
const MaterialCommunityIcons: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.MaterialCommunityIcons {...props} />
);
const MaterialIcons: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.MaterialIcons {...props} />
);
const Octicons: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.Octicons {...props} />
);
const SimpleLineIcons: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.SimpleLineIcons {...props} />
);
const Zocial: React.FC<TIconProps<TIconStyle>> = props => (
  <StyloIcon.Zocial {...props} />
);

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
