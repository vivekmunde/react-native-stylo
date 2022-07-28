/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle } from 'react-native';
import { TVariable } from '../../../types/__generated__';
import TFontColorStyle from '../../../types/__generated__/generic/font-color';

const getFontColorStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TFontColorStyle, TextStyle>>({
    'Color.Blue1': {
      color: variables['Color.Blue1'].toString(),
    },
    'Color.Blue2': {
      color: variables['Color.Blue2'].toString(),
    },
    'Color.Blue3': {
      color: variables['Color.Blue3'].toString(),
    },
    'Color.Blue4': {
      color: variables['Color.Blue4'].toString(),
    },
    'Color.Blue5': {
      color: variables['Color.Blue5'].toString(),
    },
    'Color.Blue6': {
      color: variables['Color.Blue6'].toString(),
    },
    'Color.Blue7': {
      color: variables['Color.Blue7'].toString(),
    },
    'Color.Blue8': {
      color: variables['Color.Blue8'].toString(),
    },
    'Color.Blue9': {
      color: variables['Color.Blue9'].toString(),
    },
    'Color.Blue10': {
      color: variables['Color.Blue10'].toString(),
    },
    'Color.Cyan1': {
      color: variables['Color.Cyan1'].toString(),
    },
    'Color.Cyan2': {
      color: variables['Color.Cyan2'].toString(),
    },
    'Color.Cyan3': {
      color: variables['Color.Cyan3'].toString(),
    },
    'Color.Cyan4': {
      color: variables['Color.Cyan4'].toString(),
    },
    'Color.Cyan5': {
      color: variables['Color.Cyan5'].toString(),
    },
    'Color.Cyan6': {
      color: variables['Color.Cyan6'].toString(),
    },
    'Color.Cyan7': {
      color: variables['Color.Cyan7'].toString(),
    },
    'Color.Cyan8': {
      color: variables['Color.Cyan8'].toString(),
    },
    'Color.Cyan9': {
      color: variables['Color.Cyan9'].toString(),
    },
    'Color.Cyan10': {
      color: variables['Color.Cyan10'].toString(),
    },
    'Color.Danger': {
      color: variables['Color.Danger'].toString(),
    },
    'Color.Danger1': {
      color: variables['Color.Danger1'].toString(),
    },
    'Color.Danger2': {
      color: variables['Color.Danger2'].toString(),
    },
    'Color.Danger3': {
      color: variables['Color.Danger3'].toString(),
    },
    'Color.Danger4': {
      color: variables['Color.Danger4'].toString(),
    },
    'Color.Danger5': {
      color: variables['Color.Danger5'].toString(),
    },
    'Color.Danger6': {
      color: variables['Color.Danger6'].toString(),
    },
    'Color.Danger7': {
      color: variables['Color.Danger7'].toString(),
    },
    'Color.Danger8': {
      color: variables['Color.Danger8'].toString(),
    },
    'Color.Danger9': {
      color: variables['Color.Danger9'].toString(),
    },
    'Color.Danger10': {
      color: variables['Color.Danger10'].toString(),
    },
    'Color.Green1': {
      color: variables['Color.Green1'].toString(),
    },
    'Color.Green2': {
      color: variables['Color.Green2'].toString(),
    },
    'Color.Green3': {
      color: variables['Color.Green3'].toString(),
    },
    'Color.Green4': {
      color: variables['Color.Green4'].toString(),
    },
    'Color.Green5': {
      color: variables['Color.Green5'].toString(),
    },
    'Color.Green6': {
      color: variables['Color.Green6'].toString(),
    },
    'Color.Green7': {
      color: variables['Color.Green7'].toString(),
    },
    'Color.Green8': {
      color: variables['Color.Green8'].toString(),
    },
    'Color.Green9': {
      color: variables['Color.Green9'].toString(),
    },
    'Color.Green10': {
      color: variables['Color.Green10'].toString(),
    },
    'Color.Grey1': {
      color: variables['Color.Grey1'].toString(),
    },
    'Color.Grey2': {
      color: variables['Color.Grey2'].toString(),
    },
    'Color.Grey3': {
      color: variables['Color.Grey3'].toString(),
    },
    'Color.Grey4': {
      color: variables['Color.Grey4'].toString(),
    },
    'Color.Grey5': {
      color: variables['Color.Grey5'].toString(),
    },
    'Color.Grey6': {
      color: variables['Color.Grey6'].toString(),
    },
    'Color.Grey7': {
      color: variables['Color.Grey7'].toString(),
    },
    'Color.Grey8': {
      color: variables['Color.Grey8'].toString(),
    },
    'Color.Grey9': {
      color: variables['Color.Grey9'].toString(),
    },
    'Color.Grey10': {
      color: variables['Color.Grey10'].toString(),
    },
    'Color.Info': {
      color: variables['Color.Info'].toString(),
    },
    'Color.Info1': {
      color: variables['Color.Info1'].toString(),
    },
    'Color.Info2': {
      color: variables['Color.Info2'].toString(),
    },
    'Color.Info3': {
      color: variables['Color.Info3'].toString(),
    },
    'Color.Info4': {
      color: variables['Color.Info4'].toString(),
    },
    'Color.Info5': {
      color: variables['Color.Info5'].toString(),
    },
    'Color.Info6': {
      color: variables['Color.Info6'].toString(),
    },
    'Color.Info7': {
      color: variables['Color.Info7'].toString(),
    },
    'Color.Info8': {
      color: variables['Color.Info8'].toString(),
    },
    'Color.Info9': {
      color: variables['Color.Info9'].toString(),
    },
    'Color.Info10': {
      color: variables['Color.Info10'].toString(),
    },
    'Color.Alpha1': {
      color: variables['Color.Alpha1'].toString(),
    },
    'Color.Alpha2': {
      color: variables['Color.Alpha2'].toString(),
    },
    'Color.Alpha3': {
      color: variables['Color.Alpha3'].toString(),
    },
    'Color.Alpha4': {
      color: variables['Color.Alpha4'].toString(),
    },
    'Color.Alpha5': {
      color: variables['Color.Alpha5'].toString(),
    },
    'Color.Alpha6': {
      color: variables['Color.Alpha6'].toString(),
    },
    'Color.Alpha7': {
      color: variables['Color.Alpha7'].toString(),
    },
    'Color.Alpha8': {
      color: variables['Color.Alpha8'].toString(),
    },
    'Color.Alpha9': {
      color: variables['Color.Alpha9'].toString(),
    },
    'Color.Alpha10': {
      color: variables['Color.Alpha10'].toString(),
    },
    'Color.Magenta1': {
      color: variables['Color.Magenta1'].toString(),
    },
    'Color.Magenta2': {
      color: variables['Color.Magenta2'].toString(),
    },
    'Color.Magenta3': {
      color: variables['Color.Magenta3'].toString(),
    },
    'Color.Magenta4': {
      color: variables['Color.Magenta4'].toString(),
    },
    'Color.Magenta5': {
      color: variables['Color.Magenta5'].toString(),
    },
    'Color.Magenta6': {
      color: variables['Color.Magenta6'].toString(),
    },
    'Color.Magenta7': {
      color: variables['Color.Magenta7'].toString(),
    },
    'Color.Magenta8': {
      color: variables['Color.Magenta8'].toString(),
    },
    'Color.Magenta9': {
      color: variables['Color.Magenta9'].toString(),
    },
    'Color.Magenta10': {
      color: variables['Color.Magenta10'].toString(),
    },
    'Color.Orange1': {
      color: variables['Color.Orange1'].toString(),
    },
    'Color.Orange2': {
      color: variables['Color.Orange2'].toString(),
    },
    'Color.Orange3': {
      color: variables['Color.Orange3'].toString(),
    },
    'Color.Orange4': {
      color: variables['Color.Orange4'].toString(),
    },
    'Color.Orange5': {
      color: variables['Color.Orange5'].toString(),
    },
    'Color.Orange6': {
      color: variables['Color.Orange6'].toString(),
    },
    'Color.Orange7': {
      color: variables['Color.Orange7'].toString(),
    },
    'Color.Orange8': {
      color: variables['Color.Orange8'].toString(),
    },
    'Color.Orange9': {
      color: variables['Color.Orange9'].toString(),
    },
    'Color.Orange10': {
      color: variables['Color.Orange10'].toString(),
    },
    'Color.Primary': {
      color: variables['Color.Primary'].toString(),
    },
    'Color.Primary1': {
      color: variables['Color.Primary1'].toString(),
    },
    'Color.Primary2': {
      color: variables['Color.Primary2'].toString(),
    },
    'Color.Primary3': {
      color: variables['Color.Primary3'].toString(),
    },
    'Color.Primary4': {
      color: variables['Color.Primary4'].toString(),
    },
    'Color.Primary5': {
      color: variables['Color.Primary5'].toString(),
    },
    'Color.Primary6': {
      color: variables['Color.Primary6'].toString(),
    },
    'Color.Primary7': {
      color: variables['Color.Primary7'].toString(),
    },
    'Color.Primary8': {
      color: variables['Color.Primary8'].toString(),
    },
    'Color.Primary9': {
      color: variables['Color.Primary9'].toString(),
    },
    'Color.Primary10': {
      color: variables['Color.Primary10'].toString(),
    },
    'Color.Purple1': {
      color: variables['Color.Purple1'].toString(),
    },
    'Color.Purple2': {
      color: variables['Color.Purple2'].toString(),
    },
    'Color.Purple3': {
      color: variables['Color.Purple3'].toString(),
    },
    'Color.Purple4': {
      color: variables['Color.Purple4'].toString(),
    },
    'Color.Purple5': {
      color: variables['Color.Purple5'].toString(),
    },
    'Color.Purple6': {
      color: variables['Color.Purple6'].toString(),
    },
    'Color.Purple7': {
      color: variables['Color.Purple7'].toString(),
    },
    'Color.Purple8': {
      color: variables['Color.Purple8'].toString(),
    },
    'Color.Purple9': {
      color: variables['Color.Purple9'].toString(),
    },
    'Color.Purple10': {
      color: variables['Color.Purple10'].toString(),
    },
    'Color.Red1': {
      color: variables['Color.Red1'].toString(),
    },
    'Color.Red2': {
      color: variables['Color.Red2'].toString(),
    },
    'Color.Red3': {
      color: variables['Color.Red3'].toString(),
    },
    'Color.Red4': {
      color: variables['Color.Red4'].toString(),
    },
    'Color.Red5': {
      color: variables['Color.Red5'].toString(),
    },
    'Color.Red6': {
      color: variables['Color.Red6'].toString(),
    },
    'Color.Red7': {
      color: variables['Color.Red7'].toString(),
    },
    'Color.Red8': {
      color: variables['Color.Red8'].toString(),
    },
    'Color.Red9': {
      color: variables['Color.Red9'].toString(),
    },
    'Color.Red10': {
      color: variables['Color.Red10'].toString(),
    },
    'Color.Secondary': {
      color: variables['Color.Grey7'].toString(),
    },
    'Color.Success': {
      color: variables['Color.Success'].toString(),
    },
    'Color.Success1': {
      color: variables['Color.Success1'].toString(),
    },
    'Color.Success2': {
      color: variables['Color.Success2'].toString(),
    },
    'Color.Success3': {
      color: variables['Color.Success3'].toString(),
    },
    'Color.Success4': {
      color: variables['Color.Success4'].toString(),
    },
    'Color.Success5': {
      color: variables['Color.Success5'].toString(),
    },
    'Color.Success6': {
      color: variables['Color.Success6'].toString(),
    },
    'Color.Success7': {
      color: variables['Color.Success7'].toString(),
    },
    'Color.Success8': {
      color: variables['Color.Success8'].toString(),
    },
    'Color.Success9': {
      color: variables['Color.Success9'].toString(),
    },
    'Color.Success10': {
      color: variables['Color.Success10'].toString(),
    },
    'Color.Warning': {
      color: variables['Color.Warning'].toString(),
    },
    'Color.Warning1': {
      color: variables['Color.Warning1'].toString(),
    },
    'Color.Warning2': {
      color: variables['Color.Warning2'].toString(),
    },
    'Color.Warning3': {
      color: variables['Color.Warning3'].toString(),
    },
    'Color.Warning4': {
      color: variables['Color.Warning4'].toString(),
    },
    'Color.Warning5': {
      color: variables['Color.Warning5'].toString(),
    },
    'Color.Warning6': {
      color: variables['Color.Warning6'].toString(),
    },
    'Color.Warning7': {
      color: variables['Color.Warning7'].toString(),
    },
    'Color.Warning8': {
      color: variables['Color.Warning8'].toString(),
    },
    'Color.Warning9': {
      color: variables['Color.Warning9'].toString(),
    },
    'Color.Warning10': {
      color: variables['Color.Warning10'].toString(),
    },
    'Color.White': {
      color: variables['Color.White'].toString(),
    },
    'Color.Yellow1': {
      color: variables['Color.Yellow1'].toString(),
    },
    'Color.Yellow2': {
      color: variables['Color.Yellow2'].toString(),
    },
    'Color.Yellow3': {
      color: variables['Color.Yellow3'].toString(),
    },
    'Color.Yellow4': {
      color: variables['Color.Yellow4'].toString(),
    },
    'Color.Yellow5': {
      color: variables['Color.Yellow5'].toString(),
    },
    'Color.Yellow6': {
      color: variables['Color.Yellow6'].toString(),
    },
    'Color.Yellow7': {
      color: variables['Color.Yellow7'].toString(),
    },
    'Color.Yellow8': {
      color: variables['Color.Yellow8'].toString(),
    },
    'Color.Yellow9': {
      color: variables['Color.Yellow9'].toString(),
    },
    'Color.Yellow10': {
      color: variables['Color.Yellow10'].toString(),
    },
  })
);

export default getFontColorStyles;
