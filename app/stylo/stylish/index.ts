/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.1                                   */
/* -------------------------------------------------------------------------------- */

import _Icon from './icon';
import _Image from './image';
import _ImageBackground from './image-background';
import _SafeAreaView from './safe-area-view';
import _ScrollView from './scroll-view';
import _Text from './text';
import _TextInput from './text-input';
import * as _Touchable from './touchable';
import _View from './view';

export const Icon = _Icon;
export const Image = _Image;
export const ImageBackground = _ImageBackground;
export const SafeAreaView = _SafeAreaView;
export const ScrollView = _ScrollView;
export const Text = _Text;
export const TextInput = _TextInput;
export const Pressable = _Touchable.Pressable;
export const TouchableHighlight = _Touchable.TouchableHighlight;
export const TouchableOpacity = _Touchable.TouchableOpacity;
export const View = _View;

const Stylish = {
  Icon,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
};

export default Stylish;
